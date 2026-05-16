import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

const zhNavbar = [
  { text: "首页", link: "/zh/" },
  { text: "前端开发", link: "/zh/frontend/" },
  { text: "后端开发", link: "/zh/backend/" },
  { text: "数据库", link: "/zh/database/" },
  { text: "人工智能", link: "/zh/ai/" },
  { text: "博客文章", link: "/zh/posts/" },
  { text: "关于博主", link: "/zh/about/" },
];

const enNavbar = [
  { text: "Home", link: "/en/" },
  { text: "Frontend", link: "/en/frontend/" },
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
      { text: "HTML 进阶", link: "/zh/frontend/html/advanced.md" },
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
      { text: "CSS 进阶", link: "/zh/frontend/css/advanced.md" },
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
      { text: "JavaScript 进阶", link: "/zh/frontend/javascript/advanced.md" },
    ],
  },
  {
    text: "Vue",
    link: "/zh/frontend/vue/",
    prefix: "/zh/frontend/vue/",
    collapsible: true,
    children: [
      { text: "Vue 入门", link: "/zh/frontend/vue/" },
      { text: "Vue 基础语法", link: "/zh/frontend/vue/basics.md" },
      { text: "Vue 组件通信", link: "/zh/frontend/vue/components.md" },
      { text: "Vue 路由和状态", link: "/zh/frontend/vue/router-state.md" },
    ],
  },
  {
    text: "React",
    link: "/zh/frontend/react/",
    prefix: "/zh/frontend/react/",
    collapsible: true,
    children: [
      { text: "React 入门", link: "/zh/frontend/react/" },
      { text: "React 基础语法", link: "/zh/frontend/react/basics.md" },
      { text: "React Hooks", link: "/zh/frontend/react/hooks.md" },
      { text: "React 路由和状态", link: "/zh/frontend/react/router-state.md" },
    ],
  },
  {
    text: "TypeScript",
    link: "/zh/frontend/typescript/",
    prefix: "/zh/frontend/typescript/",
    collapsible: true,
    children: [
      { text: "TypeScript 知识体系", link: "/zh/frontend/typescript/" },
      { text: "类型基础", link: "/zh/frontend/typescript/types.md" },
      { text: "泛型和工具类型", link: "/zh/frontend/typescript/generics.md" },
    ],
  },
  {
    text: "工程化",
    link: "/zh/frontend/engineering/",
    prefix: "/zh/frontend/engineering/",
    collapsible: true,
    children: [
      { text: "前端工程化", link: "/zh/frontend/engineering/" },
      { text: "工具链和构建", link: "/zh/frontend/engineering/toolchain.md" },
      { text: "规范和协作", link: "/zh/frontend/engineering/standards.md" },
    ],
  },
  {
    text: "浏览器和网络",
    link: "/zh/frontend/browser/",
    prefix: "/zh/frontend/browser/",
    collapsible: true,
    children: [
      { text: "浏览器和网络", link: "/zh/frontend/browser/" },
      { text: "浏览器渲染机制", link: "/zh/frontend/browser/rendering.md" },
      { text: "HTTP 和浏览器缓存", link: "/zh/frontend/browser/network.md" },
    ],
  },
  {
    text: "性能优化",
    link: "/zh/frontend/performance/",
    prefix: "/zh/frontend/performance/",
    collapsible: true,
    children: [
      { text: "前端性能优化", link: "/zh/frontend/performance/" },
      { text: "性能指标", link: "/zh/frontend/performance/metrics.md" },
      { text: "优化手段", link: "/zh/frontend/performance/optimization.md" },
    ],
  },
  {
    text: "质量保障",
    link: "/zh/frontend/quality/",
    prefix: "/zh/frontend/quality/",
    collapsible: true,
    children: [
      { text: "前端质量保障", link: "/zh/frontend/quality/" },
      { text: "前端测试", link: "/zh/frontend/quality/testing.md" },
      { text: "可访问性", link: "/zh/frontend/quality/accessibility.md" },
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
      { text: "Java 进阶", link: "/zh/backend/java/advanced.md" },
      { text: "Java 并发", link: "/zh/backend/java/concurrency.md" },
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
      { text: "Python 进阶", link: "/zh/backend/python/advanced.md" },
      { text: "Python 异步和测试", link: "/zh/backend/python/async-testing.md" },
    ],
  },
  {
    text: "Spring Boot",
    link: "/zh/backend/spring-boot/",
    prefix: "/zh/backend/spring-boot/",
    collapsible: true,
    children: [
      { text: "Spring Boot 知识体系", link: "/zh/backend/spring-boot/" },
      { text: "REST API", link: "/zh/backend/spring-boot/rest-api.md" },
      { text: "数据访问和事务", link: "/zh/backend/spring-boot/data-transaction.md" },
      { text: "Spring Security", link: "/zh/backend/spring-boot/security.md" },
    ],
  },
  {
    text: "Python Web",
    link: "/zh/backend/python-web/",
    prefix: "/zh/backend/python-web/",
    collapsible: true,
    children: [
      { text: "Python Web 知识体系", link: "/zh/backend/python-web/" },
      { text: "Django", link: "/zh/backend/python-web/django.md" },
      { text: "FastAPI", link: "/zh/backend/python-web/fastapi.md" },
      { text: "Flask", link: "/zh/backend/python-web/flask.md" },
    ],
  },
  {
    text: "接口设计",
    link: "/zh/backend/api-design/",
    prefix: "/zh/backend/api-design/",
    collapsible: true,
    children: [
      { text: "接口设计", link: "/zh/backend/api-design/" },
      { text: "RESTful 规范", link: "/zh/backend/api-design/rest.md" },
      { text: "错误码和文档", link: "/zh/backend/api-design/errors.md" },
    ],
  },
  {
    text: "系统稳定性",
    link: "/zh/backend/stability/",
    prefix: "/zh/backend/stability/",
    collapsible: true,
    children: [
      { text: "系统稳定性", link: "/zh/backend/stability/" },
      { text: "日志和监控", link: "/zh/backend/stability/logging-monitoring.md" },
      { text: "限流熔断和降级", link: "/zh/backend/stability/resilience.md" },
    ],
  },
  {
    text: "后端安全",
    link: "/zh/backend/security/",
    prefix: "/zh/backend/security/",
    collapsible: true,
    children: [
      { text: "后端安全", link: "/zh/backend/security/" },
      { text: "认证和授权", link: "/zh/backend/security/auth.md" },
      { text: "Web 安全基础", link: "/zh/backend/security/web-security.md" },
    ],
  },
  {
    text: "测试和部署",
    link: "/zh/backend/testing-deploy/",
    prefix: "/zh/backend/testing-deploy/",
    collapsible: true,
    children: [
      { text: "测试和部署", link: "/zh/backend/testing-deploy/" },
      { text: "后端测试", link: "/zh/backend/testing-deploy/testing.md" },
      { text: "部署和运维", link: "/zh/backend/testing-deploy/deployment.md" },
    ],
  },
];

const databaseSidebar = [
  { text: "数据库概述", link: "/zh/database/" },
  { text: "MySQL", link: "/zh/database/mysql.md" },
  { text: "Oracle", link: "/zh/database/oracle.md" },
  { text: "SQL Server", link: "/zh/database/sql-server.md" },
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
  "/zh/frontend/vue/": frontendSidebar,
  "/zh/frontend/react/": frontendSidebar,
  "/zh/frontend/typescript/": frontendSidebar,
  "/zh/frontend/engineering/": frontendSidebar,
  "/zh/frontend/browser/": frontendSidebar,
  "/zh/frontend/performance/": frontendSidebar,
  "/zh/frontend/quality/": frontendSidebar,
  "/zh/backend/": backendSidebar,
  "/zh/backend/java/": backendSidebar,
  "/zh/backend/python/": backendSidebar,
  "/zh/backend/spring-boot/": backendSidebar,
  "/zh/backend/python-web/": backendSidebar,
  "/zh/backend/api-design/": backendSidebar,
  "/zh/backend/stability/": backendSidebar,
  "/zh/backend/security/": backendSidebar,
  "/zh/backend/testing-deploy/": backendSidebar,
  "/zh/database/": databaseSidebar,
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
        home: "/zh/",
      },
      "/en/": {
        navbar: enNavbar,
        sidebar,
      },
    },
    footer: "MIT Licensed | Copyright © 2024-present 魔法星博客",
  }),
});
