import { SectionLabel } from "./About";

const GROUPS = [
  { label: "Languages", items: ["Python", "Go", "Java", "C++", "C", "SQL"] },
  {
    label: "Frameworks",
    items: ["Django", "Django REST Framework", "Go (Beego)", "Next.js", "React", "Tailwind CSS"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "PostGIS", "MySQL", "SQLite", "Apache Iceberg", "Qdrant"],
  },
  { label: "Data Engineering", items: ["PySpark", "Elasticsearch", "Kibana"] },
  {
    label: "Tools",
    items: ["Docker", "Git", "GitHub Actions", "Playwright", "Pytest", "Scrapy", "Ruff", "SonarQube"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="04" title="Skills" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g) => (
          <div key={g.label} className="rounded-xl border border-line bg-panel/60 p-6">
            <p className="font-mono text-[11px] uppercase tracking-wide text-cyan">{g.label}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line px-2.5 py-1 text-[13px] text-text-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
