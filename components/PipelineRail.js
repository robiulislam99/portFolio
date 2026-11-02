"use client";

import { useSyncExternalStore } from "react";
import { sections } from "@/lib/content";
import useActiveSection from "./useActiveSection";

const IDS = sections.map((s) => s.id);
const WIDE = "(min-width: 1280px)";

function subscribe(onChange) {
  const mq = window.matchMedia(WIDE);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const isWide = () => window.matchMedia(WIDE).matches;
const notWideOnServer = () => false;

// Fixed side rail that maps each section to a pipeline stage. It only mounts on
// wide screens, where there is room beside the content column, so phones never
// download-and-hydrate markup they can't see.
export default function PipelineRail() {
  const wide = useSyncExternalStore(subscribe, isWide, notWideOnServer);
  if (!wide) return null;
  return <Rail />;
}

function Rail() {
  const activeId = useActiveSection(IDS);

  return (
    <nav aria-label="Section progress" className="fixed left-5 top-1/2 z-40 -translate-y-1/2">
      <ol className="rail flex flex-col gap-7 pl-4">
        {sections.map(({ id, stage }) => {
          const active = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center gap-3"
                aria-current={active ? "location" : undefined}
              >
                <span
                  aria-hidden="true"
                  className={`node-dot -ml-[21px] h-2.5 w-2.5 shrink-0 rounded-full border border-line bg-ink ${
                    active ? "active" : ""
                  }`}
                />
                <span
                  className={`font-mono text-[10px] tracking-[0.18em] transition-colors ${
                    active ? "text-cyan" : "text-text-dim group-hover:text-text"
                  }`}
                >
                  {stage}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
