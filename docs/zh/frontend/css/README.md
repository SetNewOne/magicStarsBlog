---
title: CSS 入门
icon: css
order: 2
---

# CSS 入门

CSS（Cascading Style Sheets）用于控制网页的外观和布局。

## 什么是 CSS？

CSS 是一种样式表语言，用于描述 HTML 文档的呈现方式。

```html
<!DOCTYPE html>
<html>
<head>
<style>
    h1 {
        color: blue;
        font-size: 24px;
    }
    p {
        color: gray;
        line-height: 1.6;
    }
</style>
</head>
<body>
    <h1>标题样式</h1>
    <p>这是一段文本。</p>
</body>
</html>
```

## CSS 引入方式

### 1. 内联样式

```html
<p style="color: red;">红色文本</p>
```

### 2. 内部样式表

```html
<head>
<style>
    p { color: blue; }
</style>
</head>
```

### 3. 外部样式表（推荐）

```html
<head>
<link rel="stylesheet" href="styles.css">
</head>
```

### 4. 导入样式

```html
<style>
@import url("theme.css");
</style>
```

## CSS 基础语法

```css
选择器 {
    属性: 值;
    属性: 值;
}
```

## 常用属性

### 文本样式

```css
p {
    color: #333;
    font-size: 16px;
    font-family: "微软雅黑", Arial, sans-serif;
    text-align: left;
    text-indent: 2em;
    line-height: 1.8;
    text-decoration: none;
    font-weight: normal;
    font-style: normal;
}
```

### 背景样式

```css
div {
    background-color: #f0f0f0;
    background-image: url("bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
```

### 边框样式

```css
.box {
    border: 1px solid #ddd;
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: #333;
}
```

### 盒模型

```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    box-sizing: content-box; /* 默认 */
}
```

## 选择器优先级

```
!important > 内联样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符
```

## 推荐学习资源

- [MDN CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com)
- [W3Schools CSS](https://www.w3schools.com/css/)