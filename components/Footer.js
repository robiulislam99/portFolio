import { profile } from "@/lib/content";
import { ExternalHint } from "./Section";
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  const links = [
    { label: "GitHub", href: profile.github.href, Icon: GitHubIcon, external: true },
    { label: "LinkedIn", href: profile.linkedin.href, Icon: LinkedInIcon, external: true },
    { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
  ];

  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-5 px-5 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-center font-mono text-[11px] text-text-dim sm:text-left">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-1">
          {links.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-text-dim transition-colors hover:bg-panel hover:text-cyan"
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">
                {label}
                {external ? <ExternalHint /> : null}
              </span>
            </a>
          ))}
          <span aria-hidden="true" className="mx-2 h-5 w-px bg-line" />
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 font-mono text-[11px] uppercase tracking-wide text-text-dim transition-colors hover:text-cyan"
          >
            Back to top
            <ArrowUpIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
