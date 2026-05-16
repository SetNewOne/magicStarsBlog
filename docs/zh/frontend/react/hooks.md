---
title: React Hooks
icon: react
order: 2
---

# React Hooks

Hooks 让函数组件可以使用状态、副作用、缓存和复用逻辑。

## useState

```tsx
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount((current) => current + 1)}>
            {count}
        </button>
    );
}
```

当新状态依赖旧状态时，推荐使用函数式更新。

## useEffect

```tsx
import { useEffect, useState } from "react";

export function UserName({ id }: { id: string }) {
    const [name, setName] = useState("");

    useEffect(() => {
        let ignore = false;

        async function load() {
            const response = await fetch(`/api/users/${id}`);
            const data = await response.json();

            if (!ignore) {
                setName(data.name);
            }
        }

        load();

        return () => {
            ignore = true;
        };
    }, [id]);

    return <p>{name}</p>;
}
```

`useEffect` 适合处理网络请求、订阅、计时器和手动操作 DOM 等副作用。

## useMemo

```tsx
import { useMemo } from "react";

const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);
```

`useMemo` 用于缓存计算结果，不应为了所有普通表达式都使用它。

## useCallback

```tsx
import { useCallback } from "react";

const handleSubmit = useCallback(() => {
    submit(form);
}, [form]);
```

`useCallback` 用于缓存函数引用，常见于传给经过优化的子组件。

## 自定义 Hook

```tsx
import { useEffect, useState } from "react";

export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const update = () => setWidth(window.innerWidth);
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    return width;
}
```

自定义 Hook 名称必须以 `use` 开头，内部可以继续调用其他 Hook。

## Hook 规则

- 只在组件或自定义 Hook 顶层调用 Hook。
- 不要在条件、循环或普通函数里调用 Hook。
- 依赖数组要包含副作用中用到的外部变量。
