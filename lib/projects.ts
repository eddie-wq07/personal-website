export type MediaItem =
  | { type: "image"; src: string; caption?: string }
  | { type: "video"; src: string; caption?: string };

export interface Project {
  slug: string;
  title: string;
  description?: string;
  media: MediaItem[];
}

export const projects: Project[] = [
  {
    slug: "infer",
    title: "Infer",
    description: "Physical AI inference on edge hardware.",
    media: [
      { type: "video", src: "/projects/infer/1.mp4" },
      { type: "video", src: "/projects/infer/2.mp4" },
      { type: "video", src: "/projects/infer/3.mp4" },
      { type: "video", src: "/projects/infer/4.mp4" },
      { type: "video", src: "/projects/infer/5.mp4" },
      { type: "video", src: "/projects/infer/6.mp4" },
      { type: "video", src: "/projects/infer/7.mp4" },
      { type: "video", src: "/projects/infer/8.mp4" },
      { type: "video", src: "/projects/infer/9.mp4" },
      { type: "video", src: "/projects/infer/10.mp4" },
      { type: "video", src: "/projects/infer/11.mp4" },
    ],
  },
  {
    slug: "lerobot",
    title: "Lerobot ACT Training",
    description: "Training robot manipulation policies with ACT on LeRobot.",
    media: [
      { type: "video", src: "/projects/lerobot/1.mp4" },
      { type: "video", src: "/projects/lerobot/2.mp4" },
    ],
  },
  {
    slug: "clash-royale",
    title: "Clash Royale",
    description: "Clash Royale AI agent.",
    media: [
      { type: "image", src: "/projects/clash-royale/1.png" },
      { type: "image", src: "/projects/clash-royale/2.png" },
    ],
  },
  {
    slug: "course-buddy",
    title: "Course Buddy",
    description: "Course planning tool for students.",
    media: [
      { type: "image", src: "/projects/course-buddy/1.png" },
      { type: "image", src: "/projects/course-buddy/2.png" },
      { type: "image", src: "/projects/course-buddy/3.png" },
    ],
  },
];
