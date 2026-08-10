import type { MetadataRoute } from "next";

const site = "https://inclusivegrowth.org.et";
const routes = ["", "/about/overview", "/about/our-story", "/about/mvv", "/programs", "/services", "/causes", "/contact", "/donate", "/team/bod", "/team/exec-manage", "/team/org-struct"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${site}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
