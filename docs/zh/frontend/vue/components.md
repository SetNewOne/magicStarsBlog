---
title: Vue 组件通信
icon: vue
order: 2
---

# Vue 组件通信

组件通信的核心是让数据流清楚。父组件负责传入数据，子组件负责展示或发出事件。

## props

```vue
<!-- UserCard.vue -->
<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <section>{{ name }}</section>
</template>
```

父组件使用：

```vue
<UserCard name="张三" />
```

## emit

```vue
<!-- SaveButton.vue -->
<script setup>
const emit = defineEmits(["save"]);
</script>

<template>
    <button @click="emit('save')">保存</button>
</template>
```

父组件监听：

```vue
<SaveButton @save="submitForm" />
```

## 插槽

```vue
<!-- Panel.vue -->
<template>
    <section class="panel">
        <header>
            <slot name="title" />
        </header>
        <main>
            <slot />
        </main>
    </section>
</template>
```

使用：

```vue
<Panel>
    <template #title>用户信息</template>
    <p>这里是内容。</p>
</Panel>
```

## provide 和 inject

跨层级共享数据时可以使用 `provide` 和 `inject`，但不适合滥用为全局状态。

```vue
<script setup>
import { provide, ref } from "vue";

const theme = ref("light");
provide("theme", theme);
</script>
```

```vue
<script setup>
import { inject } from "vue";

const theme = inject("theme", "light");
</script>
```

## 选择建议

- 父传子：使用 `props`。
- 子通知父：使用 `emit`。
- 内容占位：使用 `slot`。
- 跨多层共享：少量数据用 `provide/inject`，复杂业务用状态管理。
