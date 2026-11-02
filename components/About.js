import { about } from "@/lib/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-text-dim sm:text-[17px]">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="grid grid-cols-1 gap-px self-start overflow-hidden rounded-xl border border-line bg-line min-[420px]:grid-cols-2">
          {about.facts.map((f) => (
            <div key={f.label} className="bg-panel p-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan">{f.label}</dt>
              <dd className="mt-1.5 text-[15px] font-medium text-text">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
