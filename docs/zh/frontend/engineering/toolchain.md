---
title: 工具链和构建
icon: toolbox
order: 1
---

# 工具链和构建

工具链决定项目如何开发、打包和发布。常见现代前端项目以 Vite、TypeScript、ESLint、Prettier 为基础。

## Node.js 版本

生产项目建议使用 LTS 版本，并在团队内统一。

```text
Node.js 24.x LTS：新项目可优先评估
Node.js 22.x LTS：旧项目和兼容性场景常见
```

可以通过 `.nvmrc`、`.node-version` 或团队文档固定版本。

## 包管理

```bash
npm install
npm run dev
npm run build
```

团队应统一使用一种包管理器，并提交锁文件：

- npm：`package-lock.json`
- pnpm：`pnpm-lock.yaml`
- yarn：`yarn.lock`

## Vite 构建关注点

- 入口文件是否正确。
- 静态资源路径是否正确。
- 环境变量是否按模式加载。
- 第三方依赖是否过大。
- 是否需要按路由懒加载。

## 代码拆分

```typescript
const UserPage = () => import("./views/UserPage.vue");
```

路由级页面适合懒加载，能减少首屏体积。

## 构建验证

```bash
npm run build
```

构建通过只能说明语法和打包成功，不能替代真实页面检查。上线前还应访问关键页面和核心流程。
