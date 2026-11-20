"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

function applyTheme() {
  const root = document.documentElement;
  let stored: string | null = null;
  try {
    stored = localStorage.getItem("theme");
  } catch {
    /* abaikan */
  }
  const dark = stored === "dark" || (stored !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  root.classList.add("js");
  root.classList.toggle("dark", dark);
}

/**
 * Memasang ulang class `dark`/`js` pada <html>. Diperlukan karena saat bahasa diganti,
 * layout [locale] dirender ulang dan elemen <html> baru tidak membawa class dari skrip di <head>.
 */
export function ThemeSync() {
  const pathname = usePathname();

  React.useLayoutEffect(() => {
    applyTheme();
  }, [pathname]);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, []);

  return null;
}
