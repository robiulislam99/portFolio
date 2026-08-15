import { SectionLabel } from "./About";

const ITEMS = [
  {
    stat: "500+",
    detail: "Programming problems solved across Codeforces and LeetCode; participant, IKPC (Intra KUET Programming Contest).",
  },
  {
    stat: "Exec",
    detail: "Executive, 3rd KUET CSE National Fest (BitFest 2025).",
  },
  {
    stat: "Sec.",
    detail: "Sports Secretary, CSE Association, KUET.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="05" title="Achievements" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {ITEMS.map((i) => (
          <div key={i.detail} className="rounded-xl border border-line bg-panel/60 p-6">
            <p className="font-display text-3xl font-bold text-cyan">{i.stat}</p>
            <p className="mt-3 text-[14px] leading-relaxed text-text-dim">{i.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
