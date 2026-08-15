"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "portfolio-profile-image";

export default function ProfileImage() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setImage(saved);
    } catch {
      // localStorage unavailable (private browsing etc.) — skip silently
    }
  }, []);

  function handleFile(file) {
    setError("");
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setError("Image is larger than 3MB — pick a smaller file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setImage(dataUrl);
      try {
        window.localStorage.setItem(STORAGE_KEY, dataUrl);
      } catch {
        setError("Image loaded, but couldn't be saved for next visit (storage full).");
      }
    };
    reader.readAsDataURL(file);
  }

  function handleRemove() {
    setImage(null);
    setError("");
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {}
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="group relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-line bg-panel"
        style={{ boxShadow: "0 0 0 1px rgba(94,234,212,0.08), 0 20px 40px -20px rgba(0,0,0,0.6)" }}
      >
        {image ? (
          // Local/base64 image preview — <img> avoids next/image constraints in static export
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="Md Robiul Islam" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 font-mono text-[11px] text-text-dim">
            <span className="text-3xl text-cyan">◧</span>
            <span>no_avatar.jpg</span>
          </div>
        )}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="absolute inset-0 flex items-center justify-center bg-ink/70 font-mono text-[11px] uppercase tracking-wide text-cyan opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          {image ? "Replace" : "Add photo"}
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      <div className="flex items-center gap-3 font-mono text-[11px] text-text-dim">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="rounded border border-line px-2.5 py-1 text-text transition-colors hover:border-cyan hover:text-cyan"
        >
          {image ? "change_image()" : "upload_image()"}
        </button>
        {image && (
          <button
            type="button"
            onClick={handleRemove}
            className="rounded border border-line px-2.5 py-1 transition-colors hover:border-amber hover:text-amber"
          >
            remove()
          </button>
        )}
      </div>
      {error && <p className="max-w-[15rem] text-center text-[11px] text-amber">{error}</p>}
      <p className="max-w-[15rem] text-center text-[11px] text-text-dim">
        Stored only in this browser. To ship a real photo, drop it in{" "}
        <code className="text-text">public/images/profile.jpg</code> instead — see README.
      </p>
    </div>
  );
}
