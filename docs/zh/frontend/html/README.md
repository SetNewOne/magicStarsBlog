---
title: HTML 入门
icon: html
order: 1
---

# HTML 入门

HTML（HyperText Markup Language）是构建网页的基础语言。它定义了网页的结构和内容。

## 什么是 HTML？

HTML 是一种标记语言，用于创建网页文档。通过使用标签（tags）来描述网页的不同部分。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>我的第一个网页</title>
</head>
<body>
    <h1>欢迎访问</h1>
    <p>这是一个使用 HTML 创建的网页。</p>
</body>
</html>
```

## HTML 基础结构

```卡片
| 标签 | 说明 |
|------|------|
| `<!DOCTYPE html>` | 声明文档类型 |
| `<html>` | 根元素 |
| `<head>` | 头部信息 |
| `<body>` | 可见内容 |
```

## 常用标签

### 标题标签
```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

### 段落和文本
```html
<p>这是一个段落。</p>
<strong>加粗文本</strong>
<em>斜体文本</em>
<span>行内文本</span>
```

### 链接和图片
```html
<a href="https://example.com">访问链接</a>
<img src="image.jpg" alt="图片描述">
```

### 列表
```html
<!-- 无序列表 -->
<ul>
    <li>项目 1</li>
    <li>项目 2</li>
</ul>

<!-- 有序列表 -->
<ol>
    <li>第一项</li>
    <li>第二项</li>
</ol>
```

### 表格
```html
<table>
    <thead>
        <tr>
            <th>表头1</th>
            <th>表头2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>数据1</td>
            <td>数据2</td>
        </tr>
    </tbody>
</table>
```

### 表单
```html
<form action="/submit" method="POST">
    <label for="username">用户名：</label>
    <input type="text" id="username" name="username">
    
    <label for="email">邮箱：</label>
    <input type="email" id="email" name="email">
    
    <button type="submit">提交</button>
</form>
```

## 语义化标签

HTML5 引入了一系列语义化标签，使文档结构更清晰：

```html
<header>页眉</header>
<nav>导航栏</nav>
<main主要内容>
    <article>
        <section>文章章节</section>
    </article>
    <aside>侧边栏</aside>
</main>
<footer>页脚</footer>
```

## 最佳实践

1. **使用语义化标签** - 选择有意义的标签，如 `<article>`、`<nav>`、` <aside>`
2. **保持代码整洁** - 适当缩进和添加注释
3. **添加 alt 属性** - 为图片提供替代文本
4. **使用适当的标题层级** - 从 h1 到 h6 不要跳级
5. **验证 HTML** - 使用 W3C 验证器检查代码