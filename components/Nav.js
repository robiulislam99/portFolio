const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-bold tracking-tight text-text">
          robiul<span className="text-cyan">.</span>islam
        </a>
        <nav className="hidden gap-6 font-mono text-[12px] uppercase tracking-wide text-text-dim md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-cyan">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:islamrobiul5444@gmail.com"
          className="rounded border border-cyan-dim px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-cyan transition-colors hover:bg-cyan hover:text-ink"
        >
          Say hi
        </a>
      </div>
    </header>
  );
}
