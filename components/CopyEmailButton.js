"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export default function CopyEmailButton({ email }) {
  const [status, setStatus] = useState("idle"); // idle | copied | failed
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  }

  const label = status === "copied" ? "Copied!" : status === "failed" ? "Copy failed" : "Copy email";

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wide text-text transition-colors hover:border-cyan hover:text-cyan"
    >
      {status === "copied" ? <CheckIcon className="h-4 w-4 text-green" /> : <CopyIcon className="h-4 w-4" />}
      <span aria-live="polite">{label}</span>
    </button>
  );
}
