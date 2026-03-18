---
title: CSS 选择器
icon: css
order: 3
---

# CSS 选择器

选择器用于选中 HTML 元素并应用样式。

## 基本选择器

### 标签选择器

```css
p {
    color: #333;
}

div {
    background: #f0f0f0;
}
```

### 类选择器

```html
<div class="container">内容</div>
<p class="intro">介绍文本</p>
```

```css
.container {
    width: 1200px;
}

.intro {
    font-size: 18px;
}
```

### ID 选择器

```html
<div id="header">头部</div>
```

```css
#header {
    height: 60px;
    background: #2196f3;
}
```

### 通配符选择器

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## 组合选择器

### 后代选择器（空格）

```css
/* 选择 div 内部的所有 p 标签 */
div p {
    line-height: 1.8;
}

/* 选择 .article 内部的 .content */
.article .content {
    padding: 20px;
}
```

### 子选择器（>）

```css
/* 只选择直接子元素 */
ul > li {
    list-style: none;
}

.nav > .menu-item {
    display: inline-block;
}
```

### 相邻兄弟选择器（+）

```css
/* 选择 h1 后面紧跟的 p */
h1 + p {
    font-size: 18px;
    color: #666;
}
```

### 通用兄弟选择器（~）

```css
/* 选择 h1 后面的所有兄弟 p */
h1 ~ p {
    color: #666;
}
```

## 属性选择器

```css
/* 存在某属性 */
[title] {
    color: blue;
}

/* 属性等于某值 */
[type="text"] {
    border: 1px solid #ddd;
}

/* 属性包含某值 */
[class*="btn"] {
    padding: 10px 20px;
}

/* 属性以某值开头 */
[href^="https"] {
    color: green;
}

/* 属性以某值结尾 */
[href$=".pdf"] {
    color: red;
}

/* 属性包含空格分隔的值 */
[class~="primary"] {
    background: blue;
}

/* 属性包含前缀 */
[lang|="en"] {
    font-style: italic;
}
```

## 伪类选择器

### 状态伪类

```css
/* 未访问的链接 */
a:link {
    color: #2196f3;
}

/* 已访问的链接 */
a:visited {
    color: #9c27b0;
}

/* 鼠标悬停 */
button:hover {
    background: #1976d2;
}

/* 激活（点击） */
button:active {
    transform: scale(0.98);
}

/* 获取焦点的元素 */
input:focus {
    outline: 2px solid #2196f3;
}
```

### 结构伪类

```css
/* 第一个子元素 */
li:first-child {
    border-top: none;
}

/* 最后一个子元素 */
li:last-child {
    border-bottom: none;
}

/* 第 n 个子元素 */
li:nth-child(3) {
    background: #f5f5f5;
}

/* 奇数行 */
tr:nth-child(odd) {
    background: #f9f9f9;
}

/* 偶数行 */
tr:nth-child(even) {
    background: #fff;
}

/* 倒数第 n 个 */
li:nth-last-child(2) {
    color: #666;
}

/* 唯一的子元素 */
p:only-child {
    margin: 0;
}

/* 第一个-of-type */
p:first-of-type {
    font-size: 1.2em;
}
```

### 表单伪类

```css
/* 禁用状态 */
input:disabled {
    background: #eee;
    cursor: not-allowed;
}

/* 启用状态 */
input:enabled {
    background: white;
}

/* 选中状态 */
input:checked {
    width: 20px;
    height: 20px;
}

/* 必填项 */
input:required {
    border-color: red;
}

/* 可选填 */
input:optional {
    border-color: #ddd;
}

/* 有效输入 */
input:valid {
    border-color: green;
}

/* 无效输入 */
input:invalid {
    border-color: red;
}
```

## 伪元素选择器

```css
/* 元素前插入内容 */
p::before {
    content: "提示：";
    color: #666;
}

/* 元素后插入内容 */
p::after {
    content: "（完）";
    color: #999;
}

/* 选中的文本 */
::selection {
    background: #2196f3;
    color: white;
}

/* 第一个字母 */
p::first-letter {
    font-size: 2em;
    float: left;
}

/* 第一行 */
p::first-line {
    font-weight: bold;
}

/* 占位符文本 */
input::placeholder {
    color: #999;
}
```

## 选择器优先级

### 优先级计算

| 选择器 | 权重 |
|--------|------|
| `!important` | 最高 |
| 内联样式 `style=""` | 1000 |
| ID 选择器 `#id` | 100 |
| 类选择器 `.class` | 10 |
| 标签选择器 `tag` | 1 |
| 通配符 `*` | 0 |

### 示例

```css
/* 权重: 0,0,1,1 = 11 */
ul li { }

/* 权重: 0,0,0,2 = 2 */
ul ol+li { }

/* 权重: 0,0,1,0 = 10 */
h1 + *[rel="up"] { }

/* 权重: 0,1,0,0 = 100 */
section > h1 { }
```

### 优先级比较

```css
/* 权重: 0,1,0,0 = 100 */
#header { }

/* 权重: 0,0,1,0 = 10 */
.header { }

/* 标签选择器被类选择器覆盖 */
#header { background: blue; }
.header { background: red; } /* 生效 */
```

## 最佳实践

1. **保持简单** - 优先使用类选择器
2. **避免使用 ID** - ID 优先级过高，难以覆盖
3. **少用 `!important`** - 除非必要
4. **使用 BEM 命名** - `.block__element--modifier`
5. **结构化选择器** - 避免过长的选择器链