---
title: 泛型和工具类型
icon: typescript
order: 2
---

# 泛型和工具类型

泛型用于保留类型关系。它让函数、接口、组件可以复用，同时不丢失具体类型。

## 泛型函数

```typescript
function first<T>(items: T[]): T | undefined {
  return items[0];
}

const name = first(["张三", "李四"]);
const count = first([1, 2, 3]);
```

`T` 会根据传入的数据自动推导。

## 泛型约束

```typescript
function getId<T extends { id: number }>(item: T) {
  return item.id;
}
```

`extends` 表示泛型必须满足某种结构。

## API 响应类型

```typescript
type ApiResponse<T> = {
  code: number;
  message: string;
  data: T;
};

type User = {
  id: number;
  name: string;
};

async function getUser(): Promise<ApiResponse<User>> {
  const response = await fetch("/api/user");
  return response.json();
}
```

泛型可以让不同接口共用统一响应结构。

## 常用工具类型

```typescript
type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

type UserForm = Pick<User, "name" | "email">;
type UserPatch = Partial<UserForm>;
type UserWithoutTime = Omit<User, "createdAt">;
type UserMap = Record<number, User>;
```

使用建议：

- `Pick`：从对象中选部分字段。
- `Omit`：排除不需要的字段。
- `Partial`：把字段变成可选，适合更新表单。
- `Record`：描述键值映射。

## 组件中的泛型思路

```typescript
type Option<T> = {
  label: string;
  value: T;
};

const statusOptions: Option<"active" | "disabled">[] = [
  { label: "启用", value: "active" },
  { label: "停用", value: "disabled" },
];
```

通用组件通常需要把值类型交给调用方决定，泛型可以保留这种灵活性。
