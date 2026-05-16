---
title: Vue 路由和状态
icon: vue
order: 3
---

# Vue 路由和状态

中大型 Vue 应用通常会用 Vue Router 管理页面跳转，用 Pinia 管理跨页面共享状态。

## Vue Router 基础

```typescript
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomeView },
        {
            path: "/users/:id",
            component: () => import("../views/UserDetail.vue"),
        },
    ],
});
```

## 页面跳转

```vue
<template>
    <RouterLink to="/">首页</RouterLink>
    <RouterLink :to="`/users/${user.id}`">详情</RouterLink>
</template>
```

```typescript
import { useRouter } from "vue-router";

const router = useRouter();
router.push("/users/1");
```

## 读取路由参数

```typescript
import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.id;
```

## Pinia 状态管理

```typescript
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        token: "",
        name: "",
    }),
    actions: {
        login(token: string, name: string) {
            this.token = token;
            this.name = name;
        },
    },
});
```

使用：

```vue
<script setup lang="ts">
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
</script>

<template>
    <p>{{ userStore.name }}</p>
</template>
```

## 实践建议

- 页面级数据优先放在页面组件中。
- 多页面共享数据再放进 Pinia。
- 接口请求建议封装在 `services` 目录。
- 路由守卫适合做登录校验，不适合堆复杂业务逻辑。
