---
title: 基础标签详解
icon: html
order: 2
---

# 基础标签详解

本文详细介绍 HTML 中最常用的基础标签。

## 文本标签

### 标题标签 `<h1>` - `<h6>`

标题标签用于定义网页的标题，h1 最重要，h6 最不重要。

```html
<h1>一级标题 - 最重要</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题 - 最不重要</h6>
```

::: tip 最佳实践
每个页面应该只有一个 h1 标签，用于页面主标题。
:::

### 段落标签 `<p>`

```html
<p>这是一个段落，用于显示大段文本内容。</p>
<p>浏览器会自动在段落之间添加上下边距。</p>
```

### 强调标签

```html
<strong>加粗文本</strong> - 表示重要性
<em>斜体文本</em> - 表示强调
<mark>高亮文本</mark> - 标记重要内容
<del>删除线</del> - 表示已删除内容
<ins>下划线</ins> - 表示新增内容
```

### 换行和水平线

```html
<br> <!-- 换行 -->
<hr> <!-- 水平分割线 -->
```

## 链接标签 `<a>`

```html
<!-- 外部链接 -->
<a href="https://www.google.com">Google</a>

<!-- 内部链接 -->
<a href="/about.html">关于我们</a>

<!-- 锚点链接 -->
<a href="#section1">跳转到第一部分</a>

<!-- 新窗口打开 -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    新窗口打开
</a>
```

## 图片标签 `<img>`

```html
<!-- 基本用法 -->
<img src="image.jpg" alt="图片描述">

<!-- 带尺寸 -->
<img src="logo.png" alt="Logo" width="200" height="100">

<!-- 响应式图片 -->
<img 
    src="image-800.jpg" 
    srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
    alt="响应式图片"
>
```

## 列表标签

### 无序列表 `<ul>`

```html
<ul>
    <li>苹果</li>
    <li>香蕉</li>
    <li>橙子</li>
</ul>
```

### 有序列表 `<ol>`

```html
<ol>
    <li>第一步</li>
    <li>第二步</li>
    <li>第三步</li>
</ol>
```

### 定义列表 `<dl>`

```html
<dl>
    <dt>HTML</dt>
    <dd>超文本标记语言，用于创建网页</dd>
    
    <dt>CSS</dt>
    <dd>层叠样式表，用于美化网页</dd>
</dl>
```

## 表格标签

### 基本表格

```html
<table border="1">
    <tr>
        <th>姓名</th>
        <th>年龄</th>
    </tr>
    <tr>
        <td>张三</td>
        <td>25</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>30</td>
    </tr>
</table>
```

### 结构化表格

```html
<table>
    <thead>
        <tr>
            <th>产品</th>
            <th>价格</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>手机</td>
            <td>¥5000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>总计</td>
            <td>¥5000</td>
        </tr>
    </tfoot>
</table>
```

## 区块元素 vs 行内元素

| 区块元素 | 行内元素 |
|---------|---------|
| 独占一行 | 与其他行内元素共享一行 |
| 可以设置宽高 | 不能设置宽高 |
| `<div>`, `<p>`, `<h1>` | `<span>`, `<a>`, `<em>` |

```html
<div style="background: #f0f0f0; padding: 10px;">
    我是区块元素
</div>

<span style="background: #e0e0e0;">我是行内元素</span>
<span style="background: #e0e0e0;">我也是行内元素</span>
```