import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

const zhNavbar = [
  { text: "首页", link: "/zh/" },
  { text: "前端开发", link: "/zh/frontend/" },
  { text: "后端开发", link: "/zh/backend/" },
  { text: "人工智能", link: "/zh/ai/" },
  { text: "博客文章", link: "/zh/posts/" },
  { text: "关于博主", link: "/zh/about/" },
  { text: "English", link: "/en/" },
];

const enNavbar = [
  { text: "Home", link: "/en/" },
  { text: "Frontend", link: "/en/frontend/" },
  { text: "Chinese", link: "/zh/" },
];

const frontendSidebar = [
  { text: "前端开发概述", link: "/zh/frontend/" },
  {
    text: "HTML",
    link: "/zh/frontend/html/",
    prefix: "/zh/frontend/html/",
    collapsible: true,
    children: [
      { text: "HTML 入门", link: "/zh/frontend/html/" },
      { text: "基础标签", link: "/zh/frontend/html/basic-tags.md" },
      { text: "表单", link: "/zh/frontend/html/forms.md" },
      { text: "语义化标签", link: "/zh/frontend/html/semantic.md" },
    ],
  },
  {
    text: "CSS",
    link: "/zh/frontend/css/",
    prefix: "/zh/frontend/css/",
    collapsible: true,
    children: [
      { text: "CSS 入门", link: "/zh/frontend/css/" },
      { text: "选择器", link: "/zh/frontend/css/selectors.md" },
      { text: "盒模型", link: "/zh/frontend/css/box-model.md" },
      { text: "Flexbox 布局", link: "/zh/frontend/css/flexbox.md" },
      { text: "Grid 布局", link: "/zh/frontend/css/grid.md" },
      { text: "响应式设计", link: "/zh/frontend/css/responsive.md" },
    ],
  },
  {
    text: "JavaScript",
    link: "/zh/frontend/javascript/",
    prefix: "/zh/frontend/javascript/",
    collapsible: true,
    children: [
      { text: "JavaScript 入门", link: "/zh/frontend/javascript/" },
      { text: "基础语法", link: "/zh/frontend/javascript/basics.md" },
      { text: "DOM 操作", link: "/zh/frontend/javascript/dom.md" },
      { text: "事件处理", link: "/zh/frontend/javascript/events.md" },
      { text: "ES6+ 特性", link: "/zh/frontend/javascript/es6.md" },
      { text: "异步编程", link: "/zh/frontend/javascript/async.md" },
      { text: "模块化", link: "/zh/frontend/javascript/modules.md" },
    ],
  },
];

const backendSidebar = [
  { text: "后端开发概述", link: "/zh/backend/" },
  {
    text: "Java",
    link: "/zh/backend/java/",
    prefix: "/zh/backend/java/",
    collapsible: true,
    children: [
      { text: "Java 入门", link: "/zh/backend/java/" },
      { text: "基础语法", link: "/zh/backend/java/basics.md" },
      { text: "面向对象", link: "/zh/backend/java/oop.md" },
      { text: "集合框架", link: "/zh/backend/java/collections.md" },
      { text: "Spring Boot", link: "/zh/backend/java/spring-boot.md" },
    ],
  },
  {
    text: "Python",
    link: "/zh/backend/python/",
    prefix: "/zh/backend/python/",
    collapsible: true,
    children: [
      { text: "Python 入门", link: "/zh/backend/python/" },
      { text: "基础语法", link: "/zh/backend/python/basics.md" },
      { text: "数据类型", link: "/zh/backend/python/data-types.md" },
      { text: "Web 框架", link: "/zh/backend/python/web-frameworks.md" },
      { text: "数据分析", link: "/zh/backend/python/data-analysis.md" },
    ],
  },
];

const aiSidebar = [
  { text: "人工智能概述", link: "/zh/ai/" },
  {
    text: "OpenCode",
    link: "/zh/ai/opencode/",
    prefix: "/zh/ai/opencode/",
    collapsible: true,
    children: [
      { text: "OpenCode 入门", link: "/zh/ai/opencode/" },
      { text: "OpenCode 介绍", link: "/zh/ai/opencode/intro.md" },
      { text: "安装配置", link: "/zh/ai/opencode/installation.md" },
      { text: "快速开始", link: "/zh/ai/opencode/quickstart.md" },
      { text: "常用命令", link: "/zh/ai/opencode/commands.md" },
      { text: "技能系统", link: "/zh/ai/opencode/skills.md" },
    ],
  },
];

const enSidebar = [
  { text: "Home", link: "/en/" },
  {
    text: "Frontend",
    link: "/en/frontend/",
    prefix: "/en/frontend/",
    collapsible: true,
    children: [
      { text: "Frontend", link: "/en/frontend/" },
      {
        text: "CSS",
        link: "/en/frontend/css/",
        prefix: "/en/frontend/css/",
        collapsible: true,
        children: [{ text: "CSS", link: "/en/frontend/css/" }],
      },
    ],
  },
];

const sidebar = {
  "/zh/frontend/": frontendSidebar,
  "/zh/frontend/html/": frontendSidebar,
  "/zh/frontend/css/": frontendSidebar,
  "/zh/frontend/javascript/": frontendSidebar,
  "/zh/backend/": backendSidebar,
  "/zh/backend/java/": backendSidebar,
  "/zh/backend/python/": backendSidebar,
  "/zh/ai/": aiSidebar,
  "/zh/ai/opencode/": aiSidebar,
  "/deploy/": false,
  "/en/": enSidebar,
};

export default defineUserConfig({
  lang: "zh-CN",
  title: "魔法星博客",
  description: "前端、后端、AI 技术学习笔记",
  head: [
    ["meta", { name: "author", content: "魔法星" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          onwarn(warning, warn) {
            if (
              warning.message?.includes('"setupDevtoolsPlugin" is imported from external module "@vue/devtools-api" but never used')
            ) {
              return;
            }

            warn(warning);
          },
        },
      },
    },
  }),
  dest: ".vuepress/dist",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "魔法星博客",
      description: "前端、后端、AI 技术学习笔记",
    },
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
    displayFooter: true,
    colorMode: "auto",
    colorModeSwitch: true,
    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar,
      },
      "/zh/": {
        navbar: zhNavbar,
        sidebar,
      },
      "/en/": {
        navbar: enNavbar,
        sidebar,
      },
    },
    footer: "MIT Licensed | Copyright © 2024-present 魔法星博客",
  }),
});
