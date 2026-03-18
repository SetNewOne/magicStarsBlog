import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "魔法星博客",
  description: "前端、后端、AI 技术学习笔记",
  head: [
    ["meta", { name: "author", content: "魔法星" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
  ],
  bundler: viteBundler(),
  dest: ".vuepress/dist",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "魔法星博客",
      description: "前端、后端、AI 技术学习笔记",
    },
    "/en/": {
      lang: "en-US",
      title: "Magic Stars Blog",
      description: "Frontend, Backend & AI Tech Blog",
    },
  },
  theme: hopeTheme({
    logo: "/images/logo.svg",
    repo: "https://github.com/SetNewOne/magicStarsBlog",
    docsDir: "docs",
    lastUpdated: true,
    pure: false,
    displayFooter: true,
    searchPro: {
      hotKeys: ["k"],
      maxSuggestions: 10,
    },
    navbar: [
      {
        text: "首页",
        link: "/zh/",
        icon: "home",
      },
      {
        text: "前端开发",
        icon: "front",
        link: "/zh/frontend/",
      },
      {
        text: "后端开发",
        icon: "back",
        link: "/zh/backend/",
      },
      {
        text: "人工智能",
        icon: "ai",
        link: "/zh/ai/",
      },
      {
        text: "博客文章",
        icon: "blog",
        link: "/zh/posts/",
      },
      {
        text: "关于",
        icon: "person",
        link: "/zh/about/",
      },
      {
        text: "English",
        link: "/en/",
        icon: "language",
      },
    ],
    sidebar: {
      "/zh/frontend/": [
        {
          text: "前端开发",
          icon: "front",
          collapsible: false,
          children: [
            ["/zh/frontend/README.md", "概述"],
            "/zh/frontend/html/",
            "/zh/frontend/css/",
            "/zh/frontend/javascript/",
          ],
        },
      ],
      "/zh/frontend/html/": [
        {
          text: "HTML",
          icon: "html",
          children: [
            ["/zh/frontend/html/README.md", "HTML 入门"],
            ["/zh/frontend/html/basic-tags.md", "基础标签"],
            ["/zh/frontend/html/forms.md", "表单"],
            ["/zh/frontend/html/semantic.md", "语义化标签"],
          ],
        },
      ],
      "/zh/frontend/css/": [
        {
          text: "CSS",
          icon: "css",
          children: [
            ["/zh/frontend/css/README.md", "CSS 入门"],
            ["/zh/frontend/css/selectors.md", "选择器"],
            ["/zh/frontend/css/box-model.md", "盒模型"],
            ["/zh/frontend/css/flexbox.md", "Flexbox 布局"],
            ["/zh/frontend/css/grid.md", "Grid 布局"],
            ["/zh/frontend/css/responsive.md", "响应式设计"],
          ],
        },
      ],
      "/zh/frontend/javascript/": [
        {
          text: "JavaScript",
          icon: "js",
          children: [
            ["/zh/frontend/javascript/README.md", "JavaScript 入门"],
            ["/zh/frontend/javascript/basics.md", "基础语法"],
            ["/zh/frontend/javascript/dom.md", "DOM 操作"],
            ["/zh/frontend/javascript/events.md", "事件处理"],
            ["/zh/frontend/javascript/es6.md", "ES6+ 特性"],
            ["/zh/frontend/javascript/async.md", "异步编程"],
            ["/zh/frontend/javascript/modules.md", "模块化"],
          ],
        },
      ],
      "/zh/backend/": [
        {
          text: "后端开发",
          icon: "back",
          collapsible: false,
          children: [
            ["/zh/backend/README.md", "概述"],
            "/zh/backend/java/",
            "/zh/backend/python/",
          ],
        },
      ],
      "/zh/backend/java/": [
        {
          text: "Java",
          icon: "java",
          children: [
            ["/zh/backend/java/README.md", "Java 入门"],
            ["/zh/backend/java/basics.md", "基础语法"],
            ["/zh/backend/java/oop.md", "面向对象"],
            ["/zh/backend/java/collections.md", "集合框架"],
            ["/zh/backend/java/spring-boot.md", "Spring Boot"],
          ],
        },
      ],
      "/zh/backend/python/": [
        {
          text: "Python",
          icon: "python",
          children: [
            ["/zh/backend/python/README.md", "Python 入门"],
            ["/zh/backend/python/basics.md", "基础语法"],
            ["/zh/backend/python/data-types.md", "数据类型"],
            ["/zh/backend/python/web-frameworks.md", "Web 框架"],
            ["/zh/backend/python/data-analysis.md", "数据分析"],
          ],
        },
      ],
      "/zh/ai/": [
        {
          text: "人工智能",
          icon: "ai",
          collapsible: false,
          children: [
            ["/zh/ai/opencode/README.md", "概述"],
            "/zh/ai/opencode/",
          ],
        },
      ],
      "/zh/ai/opencode/": [
        {
          text: "OpenCode",
          icon: "opencode",
          children: [
            ["/zh/ai/opencode/intro.md", "OpenCode 介绍"],
            ["/zh/ai/opencode/installation.md", "安装配置"],
            ["/zh/ai/opencode/quickstart.md", "快速开始"],
            ["/zh/ai/opencode/commands.md", "常用命令"],
            ["/zh/ai/opencode/skills.md", "技能系统"],
          ],
        },
      ],
      "/en/": [
        {
          text: "English",
          icon: "language",
          collapsible: false,
          children: [
            ["/en/README.md", "Home"],
            ["/en/frontend/README.md", "Frontend"],
            ["/en/backend/README.md", "Backend"],
            ["/en/ai/opencode/README.md", "AI - OpenCode"],
          ],
        },
      ],
    },
    footer: "MIT Licensed | Copyright © 2024-present 魔法星博客",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/SetNewOne/magicStarsBlog",
      },
    ],
  }),
});