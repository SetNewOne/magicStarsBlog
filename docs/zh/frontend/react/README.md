---
title: React 入门
icon: react
order: 5
---

# React 知识模板

React 是用于构建用户界面的 JavaScript 库，强调组件、状态和单向数据流。

## 学习路线

```
JSX → 组件和 props → state → Hooks → 路由和状态管理 → 性能优化
```

## 核心概念

- JSX：在 JavaScript 中描述界面结构。
- 组件：页面的可复用单元。
- props：父组件传给子组件的数据。
- state：组件内部会变化的数据。
- Hooks：在函数组件中使用状态和副作用。

## 最小示例

```tsx
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            点击 {count}
        </button>
    );
}
```

## 推荐目录

```text
src/
├── components/
├── pages/
├── routes/
├── hooks/
├── services/
└── main.tsx
```

## 实战方向

1. Todo 应用。
2. 后台管理页面。
3. 搜索列表页。
4. 表单和数据提交页面。
