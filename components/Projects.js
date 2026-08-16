import { SectionLabel } from "./About";

const PROJECTS = [
  {
    name: "Booking Lake",
    tag: "Data Pipeline",
    stack: "PySpark · Apache Iceberg · Docker · Elasticsearch · DynamoDB · Qdrant",
    description:
      "Dockerized ETL pipeline for Booking.com-style data processing, with search, analytics and semantic similarity layered on top. CI/CD and code quality automated with Ruff and SonarQube.",
    href: "https://github.com/robiulislam99/booking-lake",
  },
  {
    name: "TravelSphere",
    tag: "Web App",
    stack: "Go · Beego · REST · Session Auth",
    description:
      "Travel discovery app with country exploration, attractions and weather integration. RESTful APIs, session-based auth, AJAX UI updates, modular MVC, 90%+ controller test coverage.",
    href: "https://github.com/robiulislam99/TravelSphere",
  },
  {
    name: "KenaKata",
    tag: "E-Commerce",
    stack: "Next.js 15 · TypeScript · Tailwind · Zustand · Zod",
    description:
      "Production-style storefront on the Next.js App Router with SSR/ISR/SSG. Product browsing, cart, checkout, auth, and a role-protected admin dashboard; Vitest for quality.",
    href: "https://github.com/robiulislam99/kenakata-online-store-nextjs",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="03" title="Projects" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-xl border border-line bg-panel/60 p-6 transition-colors hover:border-cyan-dim"
          >
            <span className="w-fit rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-cyan">
              {p.tag}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-text group-hover:text-cyan">
              {p.name}
            </h3>
            <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-dim">
              {p.description}
            </p>
            <p className="mt-4 font-mono text-[11px] text-text-dim">{p.stack}</p>
          </a>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-dashed border-line p-6">
        <span className="font-mono text-[10px] uppercase tracking-wide text-amber">Thesis</span>
        <h3 className="mt-2 font-display text-lg font-bold text-text">
          Traffic Sign Recognition in Adverse Conditions
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-text-dim">
          A YOLO-based detection system built to hold up under rain, fog, blur, low light
          and occlusion — with a custom dataset annotation pipeline and augmentation
          techniques to close the gap with real-world conditions.
        </p>
      </div>
    </section>
  );
}
