"use client";

import { useEffect, useState } from "react";

const STAGES = [
  { id: "about", label: "SOURCE" },
  { id: "experience", label: "INGEST" },
  { id: "projects", label: "TRANSFORM" },
  { id: "skills", label: "VALIDATE" },
  { id: "achievements", label: "SERVE" },
  { id: "contact", label: "SINK" },
];

export default function PipelineRail() {
  const [activeId, setActiveId] = useState(STAGES[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    STAGES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections, styled as a data pipeline"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ol className="rail flex flex-col gap-7 pl-4">
        {STAGES.map(({ id, label }) => {
          const active = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center gap-3"
                aria-current={active ? "true" : undefined}
              >
                <span
                  className={`node-dot -ml-[21px] h-2.5 w-2.5 shrink-0 rounded-full border border-line bg-ink ${
                    active ? "active" : ""
                  }`}
                />
                <span
                  className={`font-mono text-[10px] tracking-[0.18em] transition-colors ${
                    active ? "text-cyan" : "text-text-dim group-hover:text-text"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
