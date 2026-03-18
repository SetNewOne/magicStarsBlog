import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "../config/navbar";
import { sidebar } from "../config/sidebar";

export default hopeTheme({
  logo: "/logo.svg",
  favicon: "/favicon.ico",
  repo: "https://github.com/yourusername/myblog",
  docsDir: "docs",
  editLink: true,
  lastUpdated: true,
  contributors: true,
  tip: "💡 提示",
  warning: "⚠️ 注意",
  danger: "⛔ 警告",
  backToTop: true,
  fullscreen: true,
  navbar,
  sidebar,
  footer: {
    display: true,
    content: "MIT Licensed | Copyright © 2024-present",
  },
  copyright: {
    license: "MIT",
  },
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/yourusername/myblog",
    },
  ],
  searchPro: {
    hotKeys: [{ key: "k", meta: true }],
  },
  pagination: {
    prev: "← 上一页",
    next: "下一页 →",
  },
});