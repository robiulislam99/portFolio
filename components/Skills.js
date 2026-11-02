import { skills } from "@/lib/content";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Tools I work with.">
      <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-panel/60">
        {skills.map((g) => (
          <div key={g.label} className="grid gap-3 p-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6 sm:p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan sm:pt-1.5">{g.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-ink/40 px-2.5 py-1 text-[13px] text-text transition-colors hover:border-cyan-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
