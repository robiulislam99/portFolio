import { profile } from "@/lib/content";
import CopyEmailButton from "./CopyEmailButton";
import Section, { ExternalHint } from "./Section";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "Phone", value: profile.phone.display, href: profile.phone.href, Icon: PhoneIcon },
  { label: "GitHub", value: profile.github.display, href: profile.github.href, Icon: GitHubIcon },
  { label: "LinkedIn", value: profile.linkedin.display, href: profile.linkedin.href, Icon: LinkedInIcon },
];

export default function Contact() {
  return (
    <Section id="contact" title="Have a role, project or pipeline that needs building?">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-panel/70 p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan/10 blur-3xl"
        />
        <p className="relative max-w-2xl text-base leading-relaxed text-text-dim sm:text-[17px]">
          I&apos;m based in {profile.location}, and open to software engineering and data engineering
          roles. Reach out through any of the channels below.
        </p>

        <div className="relative mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-wide text-ink transition hover:bg-[#7ef0de]"
          >
            <MailIcon className="h-4 w-4" />
            Email me
          </a>
          <CopyEmailButton email={profile.email} />
        </div>

        <ul className="relative mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CHANNELS.map(({ label, value, href, Icon }) => {
            const external = href.startsWith("http");
            return (
              <li key={label} className="min-w-0">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-ink/40 p-4 transition-colors hover:border-cyan-dim hover:bg-ink/70"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-text-dim transition-colors group-hover:border-cyan-dim group-hover:text-cyan">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">{label}</span>
                    <span className="mt-0.5 block truncate text-[14px] text-text">{value}</span>
                  </span>
                  {external ? <ExternalHint /> : null}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
