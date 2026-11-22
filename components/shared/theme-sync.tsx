"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
function applyTheme() {
    const root = document.documentElement;
    let stored: string | null = null;
    try {
        stored = localStorage.getItem("theme");
    }
    catch {
    }
    const dark = stored === "dark" || (stored !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.add("js");
    root.classList.toggle("dark", dark);
}
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
