---
title: 响应式设计
icon: css
order: 7
---

# 响应式设计

响应式设计让网页在不同设备上都有良好的显示效果。

## 视口

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 媒体查询

### 基本语法

```css
/* 最小宽度 */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* 最大宽度 */
@media (max-width: 767px) {
    .container { width: 100%; }
}

/* 宽度范围 */
@media (min-width: 768px) and (max-width: 1024px) {
    .container { width: 750px; }
}
```

### 常见断点

```css
/* 超小设备 */
@media (max-width: 575px) { }

/* 小设备（手机横屏）*/
@media (min-width: 576px) and (max-width: 767px) { }

/* 中等设备（平板）*/
@media (min-width: 768px) and (max-width: 991px) { }

/* 大设备（桌面）*/
@media (min-width: 992px) and (max-width: 1199px) { }

/* 超大设备 */
@media (min-width: 1200px) { }
```

## 常见技巧

### 弹性图片

```css
img {
    max-width: 100%;
    height: auto;
}
```

### 响应式文字

```css
html {
    font-size: 16px;
}

@media (max-width: 768px) {
    html { font-size: 14px; }
}
```

### 响应式隐藏

```css
/* 移动端隐藏 */
.desktop-only { display: block; }
.mobile-only { display: none; }

@media (max-width: 768px) {
    .desktop-only { display: none; }
    .mobile-only { display: block; }
}
```

### 移动端导航

```css
/* 桌面端 */
.nav { display: flex; }

/* 移动端 */
@media (max-width: 768px) {
    .nav { 
        flex-direction: column;
        display: none;
    }
    .nav.active { display: flex; }
}
```

## 最佳实践

1. **移动优先** - 先为移动端设计，再逐步增强
2. **使用相对单位** - rem、em、vw、vh
3. **弹性布局** - Flexbox 和 Grid
4. **图片优化** - srcset 和 picture 元素