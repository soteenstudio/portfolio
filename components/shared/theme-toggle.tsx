"use client";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle({ label }: {
    label: string;
}) {
    function toggle() {
        const root = document.documentElement;
        const next = root.classList.contains("dark") ? "light" : "dark";
        root.classList.toggle("dark", next === "dark");
        try {
            localStorage.setItem("theme", next);
        }
        catch {
        }
    }
    return (<button type="button" onClick={toggle} aria-label={label} title={label} className="inline-flex size-9 items-center justify-center rounded-full border text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
      <Sun className="hidden size-4 dark:block"/>
      <Moon className="size-4 dark:hidden"/>
    </button>);
}
