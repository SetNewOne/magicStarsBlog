import type { NavbarConfig } from "@vuepress/theme-default";
import { nav } from "vuepress-theme-hope";

export const navbar = nav({
  "/zh/": [
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
  ],
  "/en/": [
    {
      text: "Home",
      link: "/en/",
      icon: "home",
    },
    {
      text: "Frontend",
      icon: "front",
      link: "/en/frontend/",
      activeMatch: "^/en/frontend/",
    },
    {
      text: "Backend",
      icon: "back",
      link: "/en/backend/",
      activeMatch: "^/en/backend/",
    },
    {
      text: "AI",
      icon: "ai",
      link: "/en/ai/",
      activeMatch: "^/en/ai/",
    },
    {
      text: "Blog",
      icon: "blog",
      link: "/en/posts/",
      activeMatch: "^/en/posts/",
    },
    {
      text: "About",
      icon: "about",
      link: "/en/about/",
    },
  ],
});