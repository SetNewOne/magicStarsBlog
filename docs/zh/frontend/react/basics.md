---
title: React 基础语法
icon: react
order: 1
---

# React 基础语法

React 通过组件描述界面。组件返回 JSX，React 根据数据变化更新页面。

## JSX

```tsx
const name = "张三";

export function Hello() {
    return <h1>你好，{name}</h1>;
}
```

JSX 中使用 `{}` 写 JavaScript 表达式。

## 组件和 props

```tsx
type UserCardProps = {
    name: string;
    age: number;
};

export function UserCard({ name, age }: UserCardProps) {
    return (
        <section>
            <h2>{name}</h2>
            <p>{age} 岁</p>
        </section>
    );
}
```

使用：

```tsx
<UserCard name="李四" age={20} />
```

## 条件渲染

```tsx
export function Status({ score }: { score: number }) {
    if (score >= 60) {
        return <p>及格</p>;
    }

    return <p>需要继续努力</p>;
}
```

也可以使用三元表达式：

```tsx
{isLogin ? <UserMenu /> : <LoginButton />}
```

## 列表渲染

```tsx
const users = [
    { id: 1, name: "张三" },
    { id: 2, name: "李四" },
];

export function UserList() {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
```

列表 `key` 应使用稳定 ID，不建议使用数组下标作为长期方案。

## 事件处理

```tsx
export function SaveButton() {
    const handleClick = () => {
        console.log("保存");
    };

    return <button onClick={handleClick}>保存</button>;
}
```
