import { SectionLabel } from "./About";

const ROLES = [
  {
    role: "Software Engineer Intern",
    org: "W3 Engineers Ltd.",
    period: "May 2026 — Present",
    points: [
      "Explored Python, Django, Next.js, Docker, and code-quality tooling (Ruff, SonarQube) alongside CI/CD practices during initial training.",
      "Contributed to a local data engineering pipeline, building ETL workflows with PySpark, Apache Iceberg, Elasticsearch, DynamoDB and Qdrant for scalable processing, search and semantic similarity.",
      "Developed and maintained containerized data pipelines, automated exports, image ranking and labeling, and data-quality workflows on Docker-based infrastructure.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="02" title="Experience" />
      <div className="mt-10 space-y-10">
        {ROLES.map((r) => (
          <article
            key={r.role}
            className="grid gap-4 rounded-xl border border-line bg-panel/60 p-6 md:grid-cols-[1fr_2.2fr] md:gap-8 md:p-8"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-cyan">{r.period}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-text">{r.role}</h3>
              <p className="text-text-dim">{r.org}</p>
            </div>
            <ul className="space-y-3 text-[15px] leading-relaxed text-text-dim">
              {r.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        <article className="grid gap-4 rounded-xl border border-line bg-panel/60 p-6 md:grid-cols-[1fr_2.2fr] md:gap-8 md:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-cyan">2025</p>
            <h3 className="mt-2 font-display text-xl font-bold text-text">
              BSc in Computer Science &amp; Engineering
            </h3>
            <p className="text-text-dim">KUET, Khulna </p>
          </div>
          <p className="text-[15px] leading-relaxed text-text-dim">
            Coursework and lab work in systems, databases and computer vision, capped by
            a thesis on traffic sign recognition in adverse conditions (see below).
          </p>
        </article>
      </div>
    </section>
  );
}
