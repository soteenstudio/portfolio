import type { CSSProperties } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "fade";

/**
 * Menandai elemen agar dianimasikan saat masuk viewport (lihat <ScrollReveal /> dan globals.css).
 * Pakai dengan spread: <li {...reveal(index * 90)} />
 *
 * @param delay   jeda dalam ms, berguna untuk efek berurutan (stagger)
 * @param variant arah/jenis animasi, default "up"
 */
export function reveal(delay = 0, variant: RevealVariant = "up") {
  return {
    "data-reveal": variant,
    style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
  };
}
