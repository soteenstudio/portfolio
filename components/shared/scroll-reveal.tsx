"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Mengamati semua elemen ber-atribut `data-reveal` dan menambahkan class `is-visible`
 * saat elemen masuk viewport. Cukup dipasang sekali di layout.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  React.useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
