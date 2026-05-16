---
title: CSS 进阶
icon: css
order: 7
---

# CSS 进阶

CSS 进阶重点在于理解层叠规则、布局能力、响应式策略和可维护的样式组织方式。

## 层叠和优先级

当多个规则作用于同一个元素时，浏览器会按来源、优先级、出现顺序决定最终样式。

```css
/* 优先级：ID > 类 > 标签 */
#title {
    color: red;
}

.heading {
    color: blue;
}

h1 {
    color: green;
}
```

建议：

- 少用 `!important`，它会让后续维护变困难。
- 避免选择器写得过长，优先使用清晰的类名。
- 组件内样式尽量围绕组件根类组织。

## 自定义属性

CSS 变量适合管理颜色、间距、圆角和阴影等设计令牌。

```css
:root {
    --color-primary: #2563eb;
    --space-md: 16px;
    --radius-sm: 6px;
}

.button {
    padding: var(--space-md);
    border-radius: var(--radius-sm);
    background: var(--color-primary);
}
```

## 现代布局技巧

### 自适应网格

```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
}
```

`auto-fit` 和 `minmax()` 可以让卡片根据容器宽度自动换行。

### 居中布局

```css
.center {
    display: grid;
    place-items: center;
    min-height: 100vh;
}
```

### 粘性定位

```css
.toc {
    position: sticky;
    top: 16px;
}
```

`sticky` 需要父容器没有破坏滚动上下文，常见问题是祖先元素设置了不合适的 `overflow`。

## 响应式策略

```css
.layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

@media (min-width: 768px) {
    .layout {
        grid-template-columns: 240px 1fr;
    }
}
```

推荐移动端优先：先写小屏样式，再用 `min-width` 逐步增强。

## 动画和过渡

```css
.menu {
    opacity: 0;
    transform: translateY(-4px);
    transition: opacity 160ms ease, transform 160ms ease;
}

.menu.is-open {
    opacity: 1;
    transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

动画应尽量使用 `opacity` 和 `transform`，少动画化 `width`、`height`、`top`、`left` 这类容易触发布局变化的属性。

## 常见小技巧

```css
/* 防止图片撑破容器 */
img {
    max-width: 100%;
    height: auto;
}

/* 单行省略 */
.line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* 多行省略 */
.multi-line {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* 稳定滚动条空间，减少布局抖动 */
.scroll-panel {
    overflow-y: auto;
    scrollbar-gutter: stable;
}
```

## 排查顺序

1. 先看元素是否匹配了预期选择器。
2. 再看样式是否被更高优先级覆盖。
3. 检查盒模型尺寸，包括 `padding`、`border`、`box-sizing`。
4. 检查父元素是否影响布局，例如 `display`、`position`、`overflow`。
5. 最后检查媒体查询和暗色模式等条件样式。
