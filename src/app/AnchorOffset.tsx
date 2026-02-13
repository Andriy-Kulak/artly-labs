"use client";

import { useEffect } from "react";

function scrollToHash(hash: string, smooth: boolean) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const topbar = document.querySelector<HTMLElement>(".topbar");
  const offset = (topbar?.getBoundingClientRect().height ?? 0) + 20;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: smooth ? "smooth" : "auto",
  });
}

export default function AnchorOffset() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const el = (event.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;

      if (!el) return;
      const href = el.getAttribute("href");
      if (!href || href === "#") return;

      event.preventDefault();
      history.pushState(null, "", href);
      scrollToHash(href, true);
    };

    const onHashChange = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash, false);
      }
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);

    if (window.location.hash) {
      // Run twice to account for late layout shifts (font/image load).
      requestAnimationFrame(() => scrollToHash(window.location.hash, false));
      setTimeout(() => scrollToHash(window.location.hash, false), 220);
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return null;
}

