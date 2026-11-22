import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { projects } from "@/data/projects";

const BASE_URL = "https://soteenstudio.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    });

    for (const project of projects) {
      entries.push({
        url: `${BASE_URL}/${locale}/projects/${project.id}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: project.featured ? 0.9 : 0.8,
      });
    }
  }

  return entries;
}