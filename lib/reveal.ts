import type { CSSProperties } from "react";
export type RevealVariant = "up" | "left" | "right" | "scale" | "fade";
export function reveal(delay = 0, variant: RevealVariant = "up") {
    return {
        "data-reveal": variant,
        style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
    };
}
