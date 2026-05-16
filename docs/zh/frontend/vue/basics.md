---
title: Vue 基础语法
icon: vue
order: 1
---

# Vue 基础语法

Vue 模板把状态、事件和渲染规则放在一起，浏览器界面会随着数据变化自动更新。

## 文本和属性绑定

```vue
<script setup>
const title = "Vue 学习";
const url = "https://vuejs.org";
</script>

<template>
    <h1>{{ title }}</h1>
    <a :href="url">官网</a>
</template>
```

`{{ }}` 用于文本插值，`:href` 是 `v-bind:href` 的简写。

## 条件渲染

```vue
<template>
    <p v-if="score >= 90">优秀</p>
    <p v-else-if="score >= 60">及格</p>
    <p v-else>需要继续努力</p>
</template>
```

`v-if` 会真正创建或销毁元素，`v-show` 只是切换 `display`。

## 列表渲染

```vue
<script setup>
const users = [
    { id: 1, name: "张三" },
    { id: 2, name: "李四" },
];
</script>

<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
</template>
```

列表一定要提供稳定的 `key`，优先使用业务 ID。

## 事件处理

```vue
<script setup>
import { ref } from "vue";

const count = ref(0);
const add = () => {
    count.value += 1;
};
</script>

<template>
    <button @click="add">加一</button>
    <p>{{ count }}</p>
</template>
```

模板中会自动解包 `ref`，脚本中访问和修改需要使用 `.value`。

## 表单双向绑定

```vue
<script setup>
import { ref } from "vue";

const username = ref("");
</script>

<template>
    <input v-model.trim="username" placeholder="请输入用户名">
    <p>当前输入：{{ username }}</p>
</template>
```

常用修饰符：

- `.trim`：去除首尾空格。
- `.number`：转为数字。
- `.lazy`：在 `change` 事件后更新。
