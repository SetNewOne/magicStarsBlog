import type { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
  {
    text: "首页",
    link: "/zh/",
    icon: "home",
  },
  {
    text: "前端开发",
    icon: "front",
    link: "/zh/frontend/",
    activeMatch: "^/zh/frontend/",
  },
  {
    text: "后端开发",
    icon: "back",
    link: "/zh/backend/",
    activeMatch: "^/zh/backend/",
  },
  {
    text: "人工智能",
    icon: "ai",
    link: "/zh/ai/",
    activeMatch: "^/zh/ai/",
  },
  {
    text: "博客文章",
    icon: "blog",
    link: "/zh/posts/",
    activeMatch: "^/zh/posts/",
  },
  {
    text: "关于",
    icon: "about",
    link: "/zh/about/",
  },
  {
    text: "English",
    link: "/en/",
  },
];