import { projects, thesis } from "@/lib/content";
import Section, { ChipList, ExternalHint } from "./Section";
import { ArrowUpRightIcon } from "./icons";

export default function Projects() {
  return (
    <Section id="projects" title="Selected projects.">
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.name} className="flex">
            <article className="group relative flex w-full flex-col rounded-xl border border-line bg-panel/60 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-dim hover:bg-panel has-[a:focus-visible]:border-cyan motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan">
                  {p.tag}
                </span>
                <span className="text-text-dim transition-colors group-hover:text-cyan" aria-hidden="true">
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-text">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none"
                >
                  {p.name}
                  <ExternalHint />
                </a>
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-dim">{p.description}</p>
              <ChipList items={p.stack} label="Tech stack" className="mt-5" />
              <p className="mt-5 inline-flex items-center gap-2 border-t border-line/70 pt-4 font-mono text-[11px] uppercase tracking-wide text-text-dim transition-colors group-hover:text-cyan">
                View source on GitHub
              </p>
            </article>
          </li>
        ))}

        <li className="flex md:col-span-1 lg:col-span-3">
          <article className="relative flex w-full flex-col overflow-hidden rounded-xl border border-dashed border-amber/35 bg-panel/40 p-6 lg:flex-row lg:items-start lg:gap-10 lg:p-8">
            <div className="lg:w-2/5 lg:shrink-0">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-amber">{thesis.tag}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-text lg:text-xl">{thesis.name}</h3>
            </div>
            <div className="mt-2 flex-1 lg:mt-0">
              <p className="text-[14px] leading-relaxed text-text-dim">{thesis.description}</p>
              <ChipList items={thesis.stack} label="Topics" className="mt-5" />
            </div>
          </article>
        </li>
      </ul>
    </Section>
  );
}
