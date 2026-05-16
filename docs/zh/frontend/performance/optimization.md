---
title: 优化手段
icon: gauge
order: 2
---

# 优化手段

性能优化应从用户路径出发，优先优化访问量高、影响大的页面。

## 资源优化

```html
<img src="/banner.webp" width="1200" height="400" loading="lazy" alt="活动横幅">
```

建议：

- 图片使用合适格式，例如 WebP、AVIF。
- 非首屏图片使用懒加载。
- 给图片设置宽高，减少布局位移。
- 图标优先使用 SVG 或图标字体。

## 代码优化

```typescript
const ChartPage = () => import("./views/ChartPage.vue");
```

建议：

- 路由级页面懒加载。
- 大型图表、编辑器按需加载。
- 避免一次引入完整工具库。
- 删除未使用代码。

## 请求优化

- 合并重复请求。
- 使用缓存避免重复加载静态数据。
- 分页加载大列表。
- 对搜索输入做防抖。

```typescript
function debounce<T extends (...args: any[]) => void>(fn: T, delay = 300) {
  let timer: number | undefined;

  return (...args: Parameters<T>) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), delay);
  };
}
```

## 渲染优化

- 长列表使用虚拟滚动。
- 大计算使用缓存或 Web Worker。
- 动画使用 `transform` 和 `opacity`。
- 避免在循环中频繁读写布局属性。
