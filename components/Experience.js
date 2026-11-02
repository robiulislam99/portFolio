import { education, experience } from "@/lib/content";
import Section, { ChipList } from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Where I've worked and studied.">
      <Timeline>
        {experience.map((r) => (
          <TimelineItem key={`${r.role}-${r.org}`} current={r.period.includes("Present")}>
            <EntryHeader as="h3" title={r.role} subtitle={r.org} period={r.period} />
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-text-dim">
              {r.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <ChipList items={r.stack} label="Technologies used" className="mt-5" />
          </TimelineItem>
        ))}
      </Timeline>

      <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.22em] text-text-dim">Education</h3>
      <Timeline className="mt-6">
        {education.map((e) => (
          <TimelineItem key={e.degree}>
            <EntryHeader as="h4" title={e.degree} subtitle={e.school} period={e.period} />
            <p className="mt-4 text-[15px] leading-relaxed text-text-dim">{e.detail}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

function Timeline({ children, className = "" }) {
  return <ol className={`relative space-y-6 sm:ml-1 sm:border-l sm:border-line sm:pl-8 ${className}`}>{children}</ol>;
}

function TimelineItem({ children, current = false }) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className={`absolute -left-[calc(2rem+5px)] top-7 hidden h-2.5 w-2.5 rounded-full border sm:block ${
          current ? "border-cyan bg-cyan shadow-[0_0_0_4px_rgba(94,234,212,0.15)]" : "border-line bg-ink"
        }`}
      />
      <article className="rounded-xl border border-line bg-panel/60 p-5 sm:p-7">{children}</article>
    </li>
  );
}

function EntryHeader({ as: Heading, title, subtitle, period }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div>
        <Heading className="font-display text-lg font-semibold text-text sm:text-xl">{title}</Heading>
        <p className="mt-0.5 text-text-dim">{subtitle}</p>
      </div>
      <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-cyan sm:pt-1.5">{period}</p>
    </div>
  );
}
