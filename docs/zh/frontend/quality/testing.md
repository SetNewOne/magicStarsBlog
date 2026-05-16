---
title: 前端测试
icon: flask
order: 1
---

# 前端测试

前端测试应围绕用户行为和业务结果，而不是只测试内部实现。

## 单元测试

适合测试纯函数。

```typescript
export function formatPrice(value: number) {
  return `￥${value.toFixed(2)}`;
}
```

```typescript
import { expect, test } from "vitest";
import { formatPrice } from "./format-price";

test("format price", () => {
  expect(formatPrice(12)).toBe("￥12.00");
});
```

## 组件测试

关注用户看到什么、点击后发生什么。

```typescript
import { render, screen } from "@testing-library/react";

render(<button>保存</button>);
expect(screen.getByRole("button", { name: "保存" })).toBeInTheDocument();
```

## 端到端测试

适合关键业务流程。

```typescript
import { test, expect } from "@playwright/test";

test("login page", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("用户名").fill("admin");
  await page.getByLabel("密码").fill("password");
  await page.getByRole("button", { name: "登录" }).click();
  await expect(page).toHaveURL(/dashboard/);
});
```

## 测试优先级

1. 关键业务流程。
2. 容易出错的工具函数。
3. 复杂表单和权限逻辑。
4. 高频组件。
