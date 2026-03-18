import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  "/zh/frontend/": [
    {
      text: "前端开发",
      icon: "front",
      collapsible: false,
      children: [
        {
          text: "HTML",
          link: "/zh/frontend/html/",
          icon: "html",
          children: [
            "/zh/frontend/html/README.md",
            "/zh/frontend/html/basic-tags.md",
            "/zh/frontend/html/forms.md",
            "/zh/frontend/html/semantic.md",
          ],
        },
        {
          text: "CSS",
          link: "/zh/frontend/css/",
          icon: "css",
          children: [
            "/zh/frontend/css/README.md",
            "/zh/frontend/css/selectors.md",
            "/zh/frontend/css/box-model.md",
            "/zh/frontend/css/flexbox.md",
            "/zh/frontend/css/grid.md",
            "/zh/frontend/css/responsive.md",
          ],
        },
        {
          text: "JavaScript",
          link: "/zh/frontend/javascript/",
          icon: "js",
          children: [
            "/zh/frontend/javascript/README.md",
            "/zh/frontend/javascript/basics.md",
            "/zh/frontend/javascript/dom.md",
            "/zh/frontend/javascript/events.md",
            "/zh/frontend/javascript/es6.md",
            "/zh/frontend/javascript/async.md",
            "/zh/frontend/javascript/modules.md",
          ],
        },
      ],
    },
  ],
  "/zh/backend/": [
    {
      text: "后端开发",
      icon: "back",
      collapsible: false,
      children: [
        {
          text: "Java",
          link: "/zh/backend/java/",
          icon: "java",
          children: [
            "/zh/backend/java/README.md",
            "/zh/backend/java/basics.md",
            "/zh/backend/java/oop.md",
            "/zh/backend/java/collections.md",
            "/zh/backend/java/spring-boot.md",
          ],
        },
        {
          text: "Python",
          link: "/zh/backend/python/",
          icon: "python",
          children: [
            "/zh/backend/python/README.md",
            "/zh/backend/python/basics.md",
            "/zh/backend/python/data-types.md",
            "/zh/backend/python/web-frameworks.md",
            "/zh/backend/python/data-analysis.md",
          ],
        },
      ],
    },
  ],
  "/zh/ai/": [
    {
      text: "人工智能",
      icon: "ai",
      collapsible: false,
      children: [
        {
          text: "OpenCode",
          link: "/zh/ai/opencode/",
          icon: "opencode",
          children: [
            "/zh/ai/opencode/README.md",
            "/zh/ai/opencode/intro.md",
            "/zh/ai/opencode/installation.md",
            "/zh/ai/opencode/quickstart.md",
            "/zh/ai/opencode/commands.md",
            "/zh/ai/opencode/skills.md",
          ],
        },
      ],
    },
  ],
  "/en/": [
    {
      text: "Frontend",
      icon: "front",
      collapsible: false,
      children: [
        {
          text: "HTML",
          link: "/en/frontend/html/",
          icon: "html",
          children: ["/en/frontend/html/README.md"],
        },
        {
          text: "CSS",
          link: "/en/frontend/css/",
          icon: "css",
          children: ["/en/frontend/css/README.md"],
        },
        {
          text: "JavaScript",
          link: "/en/frontend/javascript/",
          icon: "js",
          children: ["/en/frontend/javascript/README.md"],
        },
      ],
    },
    {
      text: "Backend",
      icon: "back",
      collapsible: false,
      children: [
        {
          text: "Java",
          link: "/en/backend/java/",
          icon: "java",
          children: ["/en/backend/java/README.md"],
        },
        {
          text: "Python",
          link: "/en/backend/python/",
          icon: "python",
          children: ["/en/backend/python/README.md"],
        },
      ],
    },
    {
      text: "AI",
      icon: "ai",
      collapsible: false,
      children: [
        {
          text: "OpenCode",
          link: "/en/ai/opencode/",
          icon: "opencode",
          children: ["/en/ai/opencode/README.md"],
        },
      ],
    },
  ],
};