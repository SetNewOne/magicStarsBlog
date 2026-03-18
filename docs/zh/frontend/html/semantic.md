---
title: 语义化标签
icon: html
order: 4
---

# 语义化标签

语义化标签让 HTML 更有意义，帮助搜索引擎和开发者理解页面结构。

## 什么是语义化？

```html
<!-- 非语义化 -->
<div class="header"></div>
<div class="nav"></div>
<div class="main"></div>
<div class="footer"></div>

<!-- 语义化 -->
<header></header>
<nav></nav>
<main></main>
<footer></footer>
```

## 常用语义化标签

### `<header>` - 页眉

```html
<header>
    <h1>网站标题</h1>
    <nav>
        <a href="/">首页</a>
        <a href="/about">关于</a>
    </nav>
</header>
```

### `<nav>` - 导航

```html
<nav aria-label="主导航">
    <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/products">产品</a></li>
        <li><a href="/services">服务</a></li>
        <li><a href="/contact">联系</a></li>
    </ul>
</nav>
```

### `<main>` - 主要内容

```html
<main>
    <article>
        <h1>文章标题</h1>
        <p>文章内容...</p>
    </article>
</main>
```

### `<article>` - 文章

```html
<article>
    <header>
        <h1>文章标题</h1>
        <time datetime="2024-01-01">2024年1月1日</time>
    </header>
    <p>文章正文内容...</p>
    <footer>
        <p>作者：张三</p>
    </footer>
</article>
```

### `<section>` - 章节

```html
<section>
    <h2>章节标题</h2>
    <p>章节内容...</p>
</section>
```

### `<aside>` - 侧边栏

```html
<aside>
    <h3>相关文章</h3>
    <ul>
        <li><a href="#">文章1</a></li>
        <li><a href="#">文章2</a></li>
    </ul>
</aside>
```

### `<footer>` - 页脚

```html
<footer>
    <p>&copy; 2024 公司名称. All rights reserved.</p>
    <nav>
        <a href="/privacy">隐私政策</a>
        <a href="/terms">服务条款</a>
    </nav>
</footer>
```

### `<figure>` 和 `<figcaption>` - 图表

```html
<figure>
    <img src="chart.png" alt="销售图表">
    <figcaption>2024年销售数据图</figcaption>
</figure>
```

### `<details>` 和 `<summary>` - 折叠内容

```html
<details>
    <summary>点击展开更多</summary>
    <p>这里是隐藏的内容...</p>
</details>
```

## 语义化布局示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>语义化页面布局</title>
</head>
<body>
    <header>
        <h1>我的博客</h1>
        <nav>
            <ul>
                <li><a href="/">首页</a></li>
                <li><a href="/blog">博客</a></li>
                <li><a href="/about">关于</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="container">
        <main>
            <article>
                <header>
                    <h2>文章标题</h2>
                    <p>发布于 <time datetime="2024-01-15">2024年1月15日</time></p>
                </header>
                <p>文章正文...</p>
                <section>
                    <h3>评论</h3>
                    <p>评论内容...</p>
                </section>
            </article>
        </main>
        
        <aside>
            <h3>关于作者</h3>
            <p>个人简介...</p>
            <h3>标签云</h3>
            <ul>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">CSS</a></li>
            </ul>
        </aside>
    </div>
    
    <footer>
        <p>&copy; 2024 我的博客</p>
    </footer>
</body>
</html>
```

## 语义化的好处

1. **SEO 优化** - 搜索引擎更容易理解页面结构
2. **可访问性** - 屏幕阅读器更好地解析页面
3. **代码可读性** - 开发者更容易理解代码
4. **团队协作** - 统一规范，易于维护