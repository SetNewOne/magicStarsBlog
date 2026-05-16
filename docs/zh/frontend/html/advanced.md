---
title: HTML 进阶
icon: html
order: 5
---

# HTML 进阶

HTML 进阶的重点不是记更多标签，而是让页面结构更清晰、更可访问、更利于搜索引擎和长期维护。

## 文档结构设计

一个页面通常只保留一个主标题，并用语义化区域表达页面层级。

```html
<body>
    <header>
        <nav aria-label="主导航">
            <a href="/">首页</a>
            <a href="/posts">文章</a>
        </nav>
    </header>

    <main>
        <article>
            <h1>文章标题</h1>
            <section>
                <h2>章节标题</h2>
                <p>正文内容。</p>
            </section>
        </article>
    </main>

    <footer>Copyright 2026</footer>
</body>
```

## 可访问性基础

可访问性让键盘用户、读屏用户和搜索引擎都能更好地理解页面。

| 场景 | 推荐写法 | 说明 |
|------|----------|------|
| 图片有信息价值 | `<img alt="用户头像">` | `alt` 描述图片含义 |
| 图片只是装饰 | `<img alt="">` | 空 `alt` 避免读屏重复朗读 |
| 表单输入 | `<label for="email">邮箱</label>` | 标签和输入框明确关联 |
| 图标按钮 | `<button aria-label="关闭">×</button>` | 没有文字时补充可读名称 |
| 自定义控件 | 优先用原生元素 | 原生元素自带键盘和读屏行为 |

## 表单进阶

表单应尽量使用正确的输入类型和浏览器内置校验。

```html
<form action="/api/users" method="post">
    <label for="email">邮箱</label>
    <input id="email" name="email" type="email" autocomplete="email" required>

    <label for="age">年龄</label>
    <input id="age" name="age" type="number" min="1" max="120">

    <button type="submit">提交</button>
</form>
```

常用属性：

- `required`：必填。
- `min`、`max`：限制数字或日期范围。
- `pattern`：用正则表达式限制输入格式。
- `autocomplete`：帮助浏览器自动填充。
- `disabled`：禁用控件，禁用字段不会提交。
- `readonly`：只读控件，字段仍会提交。

## SEO 基础

页面需要让搜索引擎快速理解主题。

```html
<head>
    <title>HTML 进阶知识</title>
    <meta name="description" content="整理 HTML 语义化、表单、可访问性和 SEO 基础。">
    <link rel="canonical" href="https://example.com/html/advanced">
</head>
```

实践建议：

- 一个页面只写一个明确的 `<h1>`。
- 标题层级按顺序组织，不要为了样式跳级。
- 链接文本写清楚目的，少用“点击这里”。
- 图片尽量提供准确的替代文本。
- 文章页使用 `<article>`，章节使用 `<section>`。

## 性能相关标签

```html
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preconnect" href="https://cdn.example.com">
<script src="/main.js" defer></script>
```

说明：

- `preload`：提前加载当前页面很快会用到的重要资源。
- `preconnect`：提前建立跨域连接，适合 CDN 或 API 域名。
- `defer`：脚本等 HTML 解析完成后按顺序执行，适合大多数页面脚本。
- `async`：脚本加载完成后立即执行，适合互不依赖的统计脚本。

## 常见误区

- 不要用大量 `<div>` 代替所有语义标签。
- 不要把按钮写成只绑定点击事件的 `<span>`。
- 不要省略表单控件的 `name`，否则提交时没有字段名。
- 不要把重要文本只放在图片里。
- 不要为了视觉效果破坏标题层级。
