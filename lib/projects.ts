export interface Project {
  slug: string;
  title: string;
  description?: string;
  images: string[];
  detailImages?: { src: string; caption?: string }[];
}

export const projects: Project[] = [
  {
    slug: "orex",
    title: "Orex",
    description: "Infrastructure layer connecting simulation environments to physical robot fleets.",
    images: [
      "/projects/orex/1.png",
      "/projects/orex/2.png",
    ],
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    description: "Built with Next.js, WebGL dithering shaders, and a custom word cycler.",
    images: [
      "/projects/personal-website/1.png",
    ],
  },
];
