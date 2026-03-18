---
home: true
title: 主页
icon: home
heroImage: /images/hero.svg
heroText: 魔法星博客
tagline: 探索前端 | 深耕后端 | 拥抱AI
heroImageStyle:
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  border-radius: 12px
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4)
actions:
  - text: 🚀 开始阅读 →
    link: /zh/frontend/
    type: primary
  - text: 👤 关于博主
    link: /zh/about/
    type: secondary
features:
  - title: 🎨 前端开发
    icon: front
    details: HTML、CSS、JavaScript，从入门到实战，构建精美网页
    link: /zh/frontend/

  - title: ⚙️ 后端开发
    icon: back
    details: Java 与 Python 双线学习，打造坚实服务端开发能力
    link: /zh/backend/

  - title: 🤖 人工智能
    icon: ai
    details: 深度探索 OpenCode AI 编程助手，提升开发效率
    link: /zh/ai/

  - title: 📝 技术博客
    icon: blog
    details: 记录学习心得、分享项目经验、总结技术干货
    link: /zh/posts/

footer: MIT Licensed | Copyright © 2024-present 魔法星博客
copyright: false
---

<style>
.hero .hero-title {
  font-size: 3.5rem !important;
}
.hero .hero-subtitle {
  font-size: 1.5rem !important;
}
</style>

## 🔥 必看

> 快速通道，点击直接跳转

<div class="banner">
  <div class="banner-item" onclick="location.href='/zh/frontend/'">
    <span class="banner-icon">🎨</span>
    <span class="banner-text">前端入门</span>
  </div>
  <div class="banner-item" onclick="location.href='/zh/backend/'">
    <span class="banner-icon">⚙️</span>
    <span class="banner-text">后端入门</span>
  </div>
  <div class="banner-item" onclick="location.href='/zh/ai/'">
    <span class="banner-icon">🤖</span>
    <span class="banner-text">AI 助手</span>
  </div>
  <div class="banner-item" onclick="location.href='/zh/posts/'">
    <span class="banner-icon">📝</span>
    <span class="banner-text">博客文章</span>
  </div>
</div>

## 📚 学习路线

| 方向 | 路线 | 目标 |
|:---:|:---|:---|
| **前端** | HTML → CSS → JavaScript → Vue/React | 独立完成网页开发 |
| **后端** | Java/Python → 数据库 → 框架 → 微服务 | 搭建完整业务系统 |
| **AI** | OpenCode入门 → 进阶使用 → 最佳实践 | 提升编程效率 |

---

## 📖 快速开始

```bash
# 克隆博客源码
git clone https://github.com/SetNewOne/magicStarsBlog.git

# 进入目录
cd magicStarsBlog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:8080](http://localhost:8080) 预览博客

---

## 📊 博客统计

- 📚 **30+** 详细教程文章
- 🎯 **3** 大技术模块
- ⭐ **持续更新** 中

---

> 💬 **温馨提示**：按 `Ctrl+K` 快速搜索文章内容

<style>
.banner {
  display: flex;
  gap: 16px;
  margin: 24px 0;
  flex-wrap: wrap;
}
.banner-item {
  flex: 1;
  min-width: 120px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  color: white;
}
.banner-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}
.banner-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}
.banner-text {
  font-size: 1rem;
  font-weight: 600;
}
</style>