import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ali Ghiasi | Programmer & Application Developer",
    short_name: "Ali Ghiasi",
    description:
      "Portfolio website for Ali Ghiasi, showcasing software development work, projects, experience, and blog posts.",
    start_url: "/",
    display: "standalone",
    background_color: "#070b12",
    theme_color: "#070b12",
    scope: "/",
    orientation: "portrait-primary",
    categories: ["productivity", "developer_tools", "personalization"],
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
