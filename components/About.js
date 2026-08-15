export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="01" title="About" />
      <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1fr]">
        <p className="font-display text-2xl leading-snug text-text sm:text-3xl">
          I build the plumbing behind data-heavy products — ETL pipelines, search
          infrastructure, and the APIs that sit on top of them.
        </p>
        <div className="space-y-4 text-[15px] leading-relaxed text-text-dim">
          <p>
            Currently a Software Engineer Intern at W3 Engineers Ltd., where I work on a
            local data engineering pipeline: building ETL workflows with PySpark and
            Apache Iceberg, and wiring up Elasticsearch, DynamoDB and Qdrant for search,
            analytics and semantic similarity.
          </p>
          <p>
            I graduated in Computer Science and Engineering from Khulna University of
            Engineering and Technology (KUET), where my thesis tackled traffic sign
            recognition under rain, fog, blur and low light using YOLO-based detection.
            Outside of pipelines, I&apos;ve shipped full-stack apps in Next.js and Go, and
            solved 500+ problems on Codeforces and LeetCode.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, title }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-xs text-cyan">{index}</span>
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-text-dim">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
