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
            "/zh/frontend/html/advanced.md",
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
            "/zh/frontend/css/advanced.md",
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
            "/zh/frontend/javascript/advanced.md",
          ],
        },
        {
          text: "Vue",
          link: "/zh/frontend/vue/",
          icon: "vue",
          children: [
            "/zh/frontend/vue/README.md",
            "/zh/frontend/vue/basics.md",
            "/zh/frontend/vue/components.md",
            "/zh/frontend/vue/router-state.md",
          ],
        },
        {
          text: "React",
          link: "/zh/frontend/react/",
          icon: "react",
          children: [
            "/zh/frontend/react/README.md",
            "/zh/frontend/react/basics.md",
            "/zh/frontend/react/hooks.md",
            "/zh/frontend/react/router-state.md",
          ],
        },
        {
          text: "TypeScript",
          link: "/zh/frontend/typescript/",
          icon: "typescript",
          children: [
            "/zh/frontend/typescript/README.md",
            "/zh/frontend/typescript/types.md",
            "/zh/frontend/typescript/generics.md",
          ],
        },
        {
          text: "工程化",
          link: "/zh/frontend/engineering/",
          icon: "toolbox",
          children: [
            "/zh/frontend/engineering/README.md",
            "/zh/frontend/engineering/toolchain.md",
            "/zh/frontend/engineering/standards.md",
          ],
        },
        {
          text: "浏览器和网络",
          link: "/zh/frontend/browser/",
          icon: "globe",
          children: [
            "/zh/frontend/browser/README.md",
            "/zh/frontend/browser/rendering.md",
            "/zh/frontend/browser/network.md",
          ],
        },
        {
          text: "性能优化",
          link: "/zh/frontend/performance/",
          icon: "gauge",
          children: [
            "/zh/frontend/performance/README.md",
            "/zh/frontend/performance/metrics.md",
            "/zh/frontend/performance/optimization.md",
          ],
        },
        {
          text: "质量保障",
          link: "/zh/frontend/quality/",
          icon: "shield-check",
          children: [
            "/zh/frontend/quality/README.md",
            "/zh/frontend/quality/testing.md",
            "/zh/frontend/quality/accessibility.md",
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
            "/zh/backend/java/advanced.md",
            "/zh/backend/java/concurrency.md",
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
            "/zh/backend/python/advanced.md",
            "/zh/backend/python/async-testing.md",
          ],
        },
        {
          text: "Spring Boot",
          link: "/zh/backend/spring-boot/",
          icon: "spring",
          children: [
            "/zh/backend/spring-boot/README.md",
            "/zh/backend/spring-boot/rest-api.md",
            "/zh/backend/spring-boot/data-transaction.md",
            "/zh/backend/spring-boot/security.md",
          ],
        },
        {
          text: "Python Web",
          link: "/zh/backend/python-web/",
          icon: "python",
          children: [
            "/zh/backend/python-web/README.md",
            "/zh/backend/python-web/django.md",
            "/zh/backend/python-web/fastapi.md",
            "/zh/backend/python-web/flask.md",
          ],
        },
        {
          text: "接口设计",
          link: "/zh/backend/api-design/",
          icon: "api",
          children: [
            "/zh/backend/api-design/README.md",
            "/zh/backend/api-design/rest.md",
            "/zh/backend/api-design/errors.md",
          ],
        },
        {
          text: "系统稳定性",
          link: "/zh/backend/stability/",
          icon: "activity",
          children: [
            "/zh/backend/stability/README.md",
            "/zh/backend/stability/logging-monitoring.md",
            "/zh/backend/stability/resilience.md",
          ],
        },
        {
          text: "后端安全",
          link: "/zh/backend/security/",
          icon: "shield-check",
          children: [
            "/zh/backend/security/README.md",
            "/zh/backend/security/auth.md",
            "/zh/backend/security/web-security.md",
          ],
        },
        {
          text: "测试和部署",
          link: "/zh/backend/testing-deploy/",
          icon: "rocket",
          children: [
            "/zh/backend/testing-deploy/README.md",
            "/zh/backend/testing-deploy/testing.md",
            "/zh/backend/testing-deploy/deployment.md",
          ],
        },
      ],
    },
  ],
  "/zh/database/": [
    {
      text: "数据库",
      icon: "database",
      collapsible: false,
      children: [
        "/zh/database/README.md",
        "/zh/database/mysql.md",
        "/zh/database/oracle.md",
        "/zh/database/sql-server.md",
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
