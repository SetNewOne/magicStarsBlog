---
title: 规范和协作
icon: list-checks
order: 2
---

# 规范和协作

规范的目标不是限制写法，而是降低团队协作成本，让代码容易读、容易改、容易查问题。

## 命名规范

```text
components/UserCard.vue
views/UserListView.vue
services/user-service.ts
utils/format-date.ts
```

建议：

- 组件名使用 PascalCase。
- 工具函数文件使用 kebab-case。
- API 文件按业务域拆分。
- 变量名表达业务含义，不用过度缩写。

## 组件拆分原则

- 页面组件负责组织数据和流程。
- 业务组件负责某个业务块。
- 基础组件负责通用交互。
- 工具函数不依赖组件状态。

## 提交前检查

```bash
npm run build
npm run test
```

如果项目没有测试，至少应运行构建，并手动检查改动涉及的页面。

## Code Review 关注点

- 功能是否覆盖正常、空数据、失败和加载状态。
- 组件职责是否清楚。
- 接口错误是否被处理。
- 样式是否在移动端和桌面端都稳定。
- 是否引入不必要的大依赖。

## 文档化

需要写清楚：

- 如何启动项目。
- 环境变量含义。
- 接口代理配置。
- 构建和部署方式。
- 常见问题处理。
