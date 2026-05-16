---
title: 浏览器和网络
icon: globe
order: 8
---

# 浏览器和网络

浏览器是前端代码真正运行的环境。理解渲染、事件、缓存、HTTP 和跨域，能帮助你定位页面慢、样式异常、请求失败和线上白屏。

## 核心能力

- 理解浏览器如何解析 HTML、CSS、JavaScript。
- 理解 DOM、CSSOM、布局、绘制和合成。
- 理解 HTTP、HTTPS、缓存、Cookie、跨域。
- 能使用 DevTools 排查网络、性能和样式问题。
- 能解释白屏、资源加载失败、接口跨域、缓存未更新等问题。

## 浏览器运行流程

```text
输入 URL
  ↓
DNS 解析
  ↓
建立连接
  ↓
发送 HTTP 请求
  ↓
下载 HTML / CSS / JS
  ↓
解析和渲染页面
  ↓
执行交互逻辑
```

## DevTools 常用面板

| 面板 | 用途 |
|------|------|
| Elements | 查看 DOM 和样式 |
| Console | 查看日志和错误 |
| Network | 查看请求、响应、缓存 |
| Performance | 分析渲染和脚本耗时 |
| Application | 查看存储、Cookie、缓存 |
| Lighthouse | 基础性能和可访问性检查 |
