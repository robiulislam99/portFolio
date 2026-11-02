"use client";

import { useEffect, useRef, useState } from "react";
import { profile, sections } from "@/lib/content";
import useActiveSection from "./useActiveSection";
import { CloseIcon, MenuIcon } from "./icons";

const IDS = sections.map((s) => s.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(IDS);
  const buttonRef = useRef(null);

  // While the mobile menu is open: lock page scroll, close on Escape, and close
  // if the viewport grows past the breakpoint where the full nav appears.
  useEffect(() => {
    if (!open) return undefined;
    const close = () => setOpen(false);
    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
        buttonRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (e) => e.matches && close();

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onBreakpoint);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md supports-[backdrop-filter]:bg-ink/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-6">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display text-[15px] font-semibold tracking-tight text-text"
          aria-label={`${profile.name}, back to top`}
        >
          robiul<span className="text-cyan">.</span>islam
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 font-mono text-[12px] uppercase tracking-wide">
            {sections.map((s) => {
              const active = activeId === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active ? "location" : undefined}
                    className={`rounded-md px-3 py-2 transition-colors ${
                      active ? "text-cyan" : "text-text-dim hover:text-text"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-md border border-cyan-dim px-3.5 py-2 font-mono text-[11px] uppercase tracking-wide text-cyan transition-colors hover:border-cyan hover:bg-cyan hover:text-ink sm:inline-flex"
          >
            Say hi
          </a>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-text transition-colors hover:border-cyan-dim hover:text-cyan lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line/70 bg-ink lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-5xl px-5 py-6 sm:px-6">
            <ul className="divide-y divide-line/70">
              {sections.map((s, i) => {
                const active = activeId === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "location" : undefined}
                      className={`flex items-baseline gap-4 py-4 font-display text-2xl font-medium tracking-tight transition-colors ${
                        active ? "text-cyan" : "text-text hover:text-cyan"
                      }`}
                    >
                      <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, "0")}</span>
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-cyan px-4 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink"
            >
              Say hi — {profile.email}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
