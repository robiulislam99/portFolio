import { achievements } from "@/lib/content";
import Section from "./Section";
import { AwardIcon, CodeIcon, FlagIcon } from "./icons";

const ICONS = { code: CodeIcon, flag: FlagIcon, award: AwardIcon };

export default function Achievements() {
  return (
    <Section id="achievements" title="Problem solving and leadership.">
      <ul className="grid gap-5 md:grid-cols-3">
        {achievements.map((a) => {
          const Icon = ICONS[a.icon] ?? AwardIcon;
          return (
            <li key={a.title} className="rounded-xl border border-line bg-panel/60 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-ink/60 text-cyan">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-text">{a.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-dim">{a.detail}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
