import ProfileImage from "./ProfileImage";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line/70">
      <div className="stream-bg pointer-events-none absolute inset-x-0 top-0 h-1" />
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.4fr_auto] md:items-center md:py-28">
        <div>
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-cyan">
            Dhaka, Bangladesh · Available for opportunities
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-text sm:text-5xl">
            Md Robiul Islam
          </h1>
          <p className="mt-3 font-display text-xl text-text-dim sm:text-2xl">
            Software Engineer — backend systems &amp; data pipelines
          </p>

          <div className="mt-8 max-w-xl rounded-xl border border-line bg-panel/80 font-mono text-[13px] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a4356]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a4356]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a4356]" />
              <span className="ml-2 text-[11px] text-text-dim">pipeline.run</span>
            </div>
            <div className="space-y-1.5 px-4 py-4 text-text-dim">
              <p>
                <span className="text-cyan">$</span> run --job=career --engineer=robiul
              </p>
              <p>[ingest] Python, Go, Java, C++, SQL ................. <span className="text-cyan">ok</span></p>
              <p>[transform] Django · Next.js · PySpark · Iceberg .... <span className="text-cyan">ok</span></p>
              <p>[validate] Ruff · SonarQube · Pytest · Playwright ... <span className="text-cyan">ok</span></p>
              <p>[serve] W3 Engineers Ltd. — Software Engineer Intern</p>
              <p className="text-text">
                <span className="text-cyan">✓</span> build complete{" "}
                <span className="cursor-blink text-cyan">▍</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/robiulislam99"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-line px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-text transition-colors hover:border-cyan hover:text-cyan"
            >
              GitHub ↗
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-cyan px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-ink transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
        </div>

        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/robiul.jpeg`}
          alt="Md Robiul Islam"
          className="h-40 w-40 rounded-2xl object-cover border border-line"
        />
      </div>
    </section>
  );
}
