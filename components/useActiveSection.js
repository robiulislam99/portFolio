"use client";

import { useEffect, useState } from "react";

// Returns the id of the section crossing the middle band of the viewport, so
// navigation can highlight where the reader is.
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);
  const key = ids.join(",");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    // The hero sits above every tracked section; clear the highlight there.
    const top = document.getElementById("top");
    const topObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveId(null);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    key.split(",").forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    if (top) topObserver.observe(top);

    return () => {
      observer.disconnect();
      topObserver.disconnect();
    };
  }, [key]);

  return activeId;
}
