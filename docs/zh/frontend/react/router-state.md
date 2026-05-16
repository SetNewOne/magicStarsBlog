---
title: React 路由和状态
icon: react
order: 3
---

# React 路由和状态

React 常用 React Router 处理页面路由，用 Context 或第三方库管理跨组件状态。

## React Router 基础

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/users/:id", element: <UserPage /> },
]);

export function App() {
    return <RouterProvider router={router} />;
}
```

## 链接和跳转

```tsx
import { Link, useNavigate } from "react-router-dom";

export function UserLink({ id }: { id: string }) {
    const navigate = useNavigate();

    return (
        <>
            <Link to={`/users/${id}`}>查看详情</Link>
            <button onClick={() => navigate("/")}>返回首页</button>
        </>
    );
}
```

## 读取路由参数

```tsx
import { useParams } from "react-router-dom";

export function UserPage() {
    const { id } = useParams();

    return <p>用户 ID：{id}</p>;
}
```

## Context

```tsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
```

Context 适合主题、语言、登录用户等低频共享状态。频繁变化的大型状态可以考虑 Zustand、Redux Toolkit 等方案。

## 状态放在哪里

- 只影响一个组件：放在该组件内部。
- 影响父子组件：提升到共同父组件。
- 多个页面共享：使用 Context 或状态管理库。
- 服务端数据：优先考虑请求缓存方案，例如 TanStack Query。
