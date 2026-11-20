import { Badge } from "@/components/ui/badge";
import type { ProjectStatus } from "@/types";

const variantByStatus = {
  live: "live",
  beta: "beta",
  "in-development": "development",
  planned: "planned",
} as const satisfies Record<ProjectStatus, "live" | "beta" | "development" | "planned">;

export function ProjectStatusBadge({ status, label }: { status: ProjectStatus; label: string }) {
  return (
    <Badge variant={variantByStatus[status]}>
      <span className="size-1.5 rounded-full bg-current" />
      {label}
    </Badge>
  );
}
