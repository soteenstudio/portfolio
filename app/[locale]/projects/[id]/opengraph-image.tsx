import { ImageResponse } from "next/og";
import { getDictionary } from "@/data/content";
import { getProject } from "@/data/projects";
import { siteName } from "@/data/structure";
import { isLocale } from "@/i18n/config";

export const alt = "Project Preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);
  const project = getProject(id);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#09090b",
            color: "#fafafa",
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          {siteName}
        </div>
      ),
      { ...size }
    );
  }

  const text = project.content[safeLocale];
  const statusLabel = dict.projects.statuses[project.status];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          color: "#fafafa",
          padding: "68px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 26, fontWeight: 600, color: "#a1a1aa" }}>
            {siteName} · {text.category}
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: 999,
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              color: "#e4e4e7",
            }}
          >
            {statusLabel}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {text.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              lineHeight: 1.4,
              maxWidth: "940px",
            }}
          >
            {text.summary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #27272a",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: 22,
                  padding: "6px 16px",
                  borderRadius: 999,
                  backgroundColor: "#18181b",
                  color: "#d4d4d8",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <span style={{ fontSize: 22, color: "#71717a" }}>
            soteenstudio.my.id
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}