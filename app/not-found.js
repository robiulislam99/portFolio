import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center px-5 py-20 sm:px-6"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Error 404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl">
        This page isn&apos;t in the pipeline.
      </h1>
      <div className="mt-8 w-full rounded-xl border border-line bg-panel/80 p-4 font-mono text-[13px] text-text-dim">
        <p>
          <span className="text-cyan">$</span> fetch --path=requested
        </p>
        <p className="mt-1.5 flex justify-between gap-3">
          <span>[error] resource not found</span>
          <span className="text-amber">404</span>
        </p>
      </div>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-cyan px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-wide text-ink transition hover:bg-[#7ef0de]"
      >
        Back to the homepage
      </Link>
    </main>
  );
}
