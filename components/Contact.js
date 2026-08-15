import { SectionLabel } from "./About";

const CHANNELS = [
  { label: "Email", value: "islamrobiul5444@gmail.com", href: "mailto:islamrobiul5444@gmail.com" },
  { label: "Phone", value: "+880 1701 508229", href: "tel:+8801701508229" },
  { label: "GitHub", value: "github.com/robiulislam99", href: "https://github.com/robiulislam99" },
  { label: "LinkedIn", value: "linkedin.com/in/md-robiul-islam-a926aa206/", href: "https://linkedin.com/in/md-robiul-islam-a926aa206/" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="06" title="Contact" />
      <div className="mt-10 rounded-xl border border-line bg-panel/60 p-8 sm:p-10">
        <p className="font-display text-2xl font-bold text-text sm:text-3xl">
          Have a role, project or pipeline that needs building?
        </p>
        <p className="mt-3 max-w-xl text-[15px] text-text-dim">
          I&apos;m based in Dhaka, Bangladesh, and open to software engineering and data
          engineering roles. Reach out through any of the channels below.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 font-mono text-[12px] text-text-dim transition-colors hover:border-cyan hover:text-cyan"
            >
              <span className="uppercase tracking-wide text-cyan/80 group-hover:text-cyan">
                {c.label}
              </span>
              <span className="text-text-dim">·</span>
              <span>{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line/70 px-6 py-8 text-center font-mono text-[11px] text-text-dim">
      © {new Date().getFullYear()} Md Robiul Islam · Built with Next.js
    </footer>
  );
}
