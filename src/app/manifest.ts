import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ali Ghiasi | Programmer & Application Developer",
    short_name: "Ali Ghiasi",
    description:
      "Portfolio website for Ali Ghiasi, showcasing software development work, projects, experience, and blog posts.",
    start_url: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone"],
    background_color: "#070b12",
    theme_color: "#070b12",
    scope: "/",
    orientation: "portrait-primary",
    categories: ["productivity", "developer_tools", "personalization"],
    prefer_related_applications: true,
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=YOUR_ANDROID_PACKAGE_ID",
        id: "YOUR_ANDROID_PACKAGE_ID",
      },
    ],
    icons: [
      {
        src: "/assets/images/93682279.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/images/93682279.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
