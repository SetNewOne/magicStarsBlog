---
title: Vue 入门
icon: vue
order: 4
---

# Vue 知识模板

Vue 是用于构建用户界面的渐进式 JavaScript 框架，适合从小型交互到完整单页应用逐步扩展。

## 学习路线

```
模板语法 → 响应式状态 → 组件通信 → 路由和状态管理 → 工程化实践
```

## 核心概念

- 声明式渲染：根据状态自动更新页面。
- 组件化：把页面拆成可复用的组件。
- 单文件组件：用 `.vue` 文件组织模板、脚本和样式。
- 响应式系统：状态变化后自动触发视图更新。
- 组合式 API：用函数组织复杂逻辑。

## 最小示例

```vue
<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
    <button @click="count += 1">点击 {{ count }}</button>
</template>
```

## 推荐目录

```text
src/
├── components/
├── views/
├── router/
├── stores/
├── services/
└── main.ts
```

## 实战方向

1. 后台管理系统。
2. 博客前台。
3. 表单配置器。
4. 数据看板。
