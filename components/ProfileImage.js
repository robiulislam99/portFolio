"use client";

import { useState } from "react";

// Baked-in photo: everyone who visits the site sees this same image.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const PHOTO_SRC = `${basePath}/images/robiul.jpeg`;

export default function ProfileImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-line bg-panel"
      style={{ boxShadow: "0 0 0 1px rgba(94,234,212,0.08), 0 20px 40px -20px rgba(0,0,0,0.6)" }}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={PHOTO_SRC}
          alt="Md Robiul Islam"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 font-mono text-[11px] text-text-dim">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-dim font-display text-xl font-bold text-cyan">
            RI
          </span>
          <span>add public/images/robiul.jpeg</span>
        </div>
      )}
    </div>
  );
}