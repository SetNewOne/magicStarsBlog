---
title: TypeScript 知识体系
icon: typescript
order: 6
---

# TypeScript 知识体系

TypeScript 是大型前端项目的基础设施。它的价值不是“多写类型”，而是在接口、组件、状态和业务模型变复杂后，仍然让代码可以被理解、重构和协作维护。

## 学习目标

- 能为接口响应、表单数据、组件参数和状态建立稳定类型。
- 能通过类型收窄处理不确定数据。
- 能使用泛型封装通用函数和组件。
- 能减少 `any`，在必要时用 `unknown` 做安全边界。
- 能看懂 Vue、React、路由、状态库中的类型声明。

## 核心知识

| 模块 | 重点 |
|------|------|
| 基础类型 | string、number、boolean、array、tuple、object |
| 联合类型 | 多种可能值、字面量类型、判别联合 |
| 类型组织 | interface、type、枚举、命名导出 |
| 类型收窄 | typeof、in、instanceof、自定义类型守卫 |
| 泛型 | 泛型函数、泛型接口、泛型约束 |
| 工具类型 | Partial、Pick、Omit、Record、ReturnType |
| 工程配置 | tsconfig、严格模式、路径别名 |

## 推荐配置方向

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "skipLibCheck": true
  }
}
```

`strict` 是项目类型质量的底线。旧项目可以逐步打开，新增项目应默认开启。

## 常见误区

- 用 `any` 消除报错，但同时消除了类型保护。
- 接口响应直接写成 `object`，导致使用时没有提示。
- 组件 props 没有类型，后期调用方很难维护。
- 过度追求复杂类型，反而让业务代码难懂。

## 实践路径

1. 先给函数入参和返回值补类型。
2. 再给接口响应和表单模型补类型。
3. 然后给组件 props、emit、状态管理补类型。
4. 最后学习泛型和工具类型，封装通用能力。
