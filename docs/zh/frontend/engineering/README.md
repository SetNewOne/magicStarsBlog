---
title: 前端工程化
icon: toolbox
order: 7
---

# 前端工程化

前端工程化解决的是“多人长期开发同一个项目时，如何保持稳定、可维护、可发布”。它包含工具链、规范、构建、环境、联调和发布。

## 工程化目标

- 开发环境启动快，热更新稳定。
- 代码风格一致，提交前能发现低级问题。
- 构建产物可重复，可部署，可回滚。
- 环境变量和接口地址清晰隔离。
- 依赖版本可控，升级有记录。

## 标准项目结构

```text
src/
├── assets/
├── components/
├── views/
├── router/
├── stores/
├── services/
├── utils/
├── styles/
└── main.ts
```

目录职责应清楚：页面放 `views`，可复用组件放 `components`，接口请求放 `services`，纯工具函数放 `utils`。

## 工具组合

| 工具 | 作用 |
|------|------|
| Vite | 开发服务器和生产构建 |
| TypeScript | 类型检查 |
| ESLint | 代码质量检查 |
| Prettier | 代码格式化 |
| pnpm / npm | 包管理 |
| Vitest | 单元测试 |
| Playwright | 端到端测试 |

## 环境划分

```text
.env.development
.env.test
.env.production
```

前端只应暴露必要的公开配置，不要把密钥写进前端环境变量。

## 发布检查

1. 安装依赖使用锁文件。
2. 运行类型检查和测试。
3. 运行生产构建。
4. 检查资源路径、路由刷新、接口地址。
5. 上线后观察错误日志和性能指标。
