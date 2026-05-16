---
title: TypeScript 类型基础
icon: typescript
order: 1
---

# TypeScript 类型基础

类型基础的目标是让数据结构可读、可检查、可重构。

## 基础类型

```typescript
const username: string = "zhangsan";
const age: number = 18;
const enabled: boolean = true;
const tags: string[] = ["frontend", "vue"];
const point: [number, number] = [120, 30];
```

大多数时候 TypeScript 能自动推导类型，不需要给每个变量都手写类型。

## 对象类型

```typescript
type User = {
  id: number;
  name: string;
  email?: string;
  status: "active" | "disabled";
};

const user: User = {
  id: 1,
  name: "张三",
  status: "active",
};
```

`?` 表示可选属性。使用可选属性时要考虑不存在的情况。

## interface 和 type

```typescript
interface ApiUser {
  id: number;
  name: string;
}

type ApiResult<T> = {
  code: number;
  message: string;
  data: T;
};
```

常见用法：

- `interface` 适合描述对象结构，尤其是公共模型。
- `type` 更灵活，适合联合类型、工具类型组合和泛型结果。

## 联合类型

```typescript
type LoadState = "idle" | "loading" | "success" | "error";

let state: LoadState = "idle";
state = "loading";
```

联合类型适合表达有限状态，能避免拼写错误和非法状态。

## 类型收窄

```typescript
function format(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return value.trim();
}
```

TypeScript 会根据判断条件缩小变量类型。

## unknown

```typescript
function parseError(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "未知错误";
}
```

`unknown` 比 `any` 安全。它要求使用前先判断类型。
