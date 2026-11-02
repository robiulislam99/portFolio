import photo from "@/public/images/robiul-600.webp";
import { experience, pipeline, profile } from "@/lib/content";
import { basePath } from "@/lib/site";
import { ArrowRightIcon, FileIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from "./icons";
import { ExternalHint } from "./Section";

export default function Hero() {
  const current = experience[0];

  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-line/70">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="stream-bg pointer-events-none absolute inset-x-0 top-0 h-px" />

      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-20 pt-12 sm:px-6 md:pt-16 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="lg:order-2">
          <div className="relative w-28 sm:w-36 lg:w-full">
            <div
              aria-hidden="true"
              className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan/40 via-line to-amber/30 opacity-70"
            />
            {/* A plain <img>: the export serves images unoptimized, so next/image would
                only add client JavaScript. The static import supplies the hashed URL. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={`Portrait of ${profile.name}`}
              fetchPriority="high"
              decoding="async"
              className="relative aspect-square h-auto w-full rounded-2xl bg-panel object-cover object-[50%_22%] lg:aspect-[4/5]"
            />
          </div>
        </div>

        <div className="min-w-0 lg:order-1">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em]">
            <span className="inline-flex items-center gap-2 rounded-full border border-green/25 bg-green/10 px-3 py-1 text-green">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_0_3px_rgba(74,222,128,0.18)]" />
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 text-text-dim">
              <MapPinIcon className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-text-dim sm:text-xl">
            {profile.role}
            <span aria-hidden="true" className="mx-2 text-line">/</span>
            <span className="sr-only">, </span>
            {profile.focus.toLowerCase()}
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-text-dim">{profile.summary}</p>

          <Terminal role={current.role} org={current.org} />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-wide text-ink transition hover:bg-[#7ef0de]"
            >
              View projects
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wide text-text transition-colors hover:border-cyan hover:text-cyan"
            >
              Get in touch
            </a>
            {profile.resume ? (
              <a
                href={`${basePath}${profile.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wide text-text transition-colors hover:border-cyan hover:text-cyan"
              >
                <FileIcon className="h-3.5 w-3.5" />
                Résumé
                <ExternalHint />
              </a>
            ) : null}
            <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-line sm:block" />
            <div className="flex items-center gap-1">
              <SocialLink href={profile.github.href} label="GitHub">
                <GitHubIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={profile.linkedin.href} label="LinkedIn">
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-dim transition-colors hover:bg-panel hover:text-cyan"
    >
      {children}
      <span className="sr-only">
        {label}
        <ExternalHint />
      </span>
    </a>
  );
}

function Terminal({ role, org }) {
  return (
    <figure
      aria-label="Career summary, styled as a pipeline run"
      className="mt-8 max-w-xl overflow-hidden rounded-xl border border-line bg-panel/85 font-mono text-[12px] shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)] sm:text-[13px]"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a4356]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a4356]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a4356]" />
        <span className="ml-2 text-[11px] text-text-dim">~/robiul — pipeline.run</span>
      </div>
      <div className="space-y-2 px-4 py-4 leading-relaxed text-text-dim">
        <p className="break-words">
          <span className="text-cyan">$</span> run --job=career --engineer=robiul
        </p>
        <ul className="space-y-1.5">
          {pipeline.map((line) => (
            <li
              key={line.stage}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3 sm:grid-cols-[6.75rem_minmax(0,1fr)_auto]"
            >
              <span className="col-span-2 text-text-dim/80 sm:col-span-1">[{line.stage}]</span>
              <span className="text-text/90">{line.items}</span>
              <span className="text-cyan">ok</span>
            </li>
          ))}
          <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3 sm:grid-cols-[6.75rem_minmax(0,1fr)_auto]">
            <span className="col-span-2 text-text-dim/80 sm:col-span-1">[serve]</span>
            <span className="text-text/90">
              {role} @ {org}
            </span>
            <span className="text-amber">live</span>
          </li>
        </ul>
        <p className="pt-1 text-text">
          <span className="text-cyan">✓</span> build complete{" "}
          <span aria-hidden="true" className="cursor-blink text-cyan">
            ▍
          </span>
        </p>
      </div>
    </figure>
  );
}
