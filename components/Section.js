import { sections } from "@/lib/content";

// Shared wrapper: consistent spacing, anchor offset for the sticky header, and a
// numbered eyebrow plus headline for every section.
export default function Section({ id, title, children, className = "" }) {
  const index = sections.findIndex((s) => s.id === id);
  const label = sections[index]?.label ?? id;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section-lazy mx-auto max-w-5xl scroll-mt-16 px-5 py-16 sm:px-6 sm:py-20 md:py-24 ${className}`}
    >
      <div className="flex items-center gap-3 font-mono text-xs">
        <span className="text-cyan">{String(index + 1).padStart(2, "0")}</span>
        <span className="uppercase tracking-[0.22em] text-text-dim">{label}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      <h2
        id={`${id}-title`}
        className="mt-5 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl"
      >
        {title}
      </h2>
      <div className="mt-10 md:mt-12">{children}</div>
    </section>
  );
}

// A list of small tags (tech stack, topics). Renders the <ul> and its items.
export function ChipList({ items, label, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-ink/40 px-2 py-0.5 font-mono text-[11px] text-text-dim"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ExternalHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}
