import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)} {...reveal()}>
      <p className="mb-4 flex items-center gap-2 text-sm font-medium text-brand">
        <span aria-hidden className="h-px w-6 bg-brand" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
