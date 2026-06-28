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
    slug: "current-project",
    title: "Current Project",
    media: [
      { type: "video", src: "/projects/current-project/video-1.mp4" },
      { type: "video", src: "/projects/current-project/video-2.mp4" },
      { type: "image", src: "/projects/current-project/1.jpg" },
    ],
  },
  {
    slug: "laundry-folding-robot",
    title: "Laundry Folding Robot",
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
    slug: "touchless-clash-royale",
    title: "Touchless Clash Royale",
    media: [
      { type: "image", src: "/projects/clash-royale/1.png" },
      { type: "image", src: "/projects/clash-royale/2.png" },
    ],
  },
  {
    slug: "course-buddy",
    title: "Course Buddy (10k active users/mo)",
    media: [
      { type: "image", src: "/projects/course-buddy/1.png" },
      { type: "image", src: "/projects/course-buddy/2.png" },
      { type: "image", src: "/projects/course-buddy/3.png" },
    ],
  },
];
