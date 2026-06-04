import type { MetadataRoute } from "next";
import { brandConfig } from "@/config/brand";
import { siteRoutes } from "@/config/site-map";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: new URL(route.path, brandConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority
  }));
}
