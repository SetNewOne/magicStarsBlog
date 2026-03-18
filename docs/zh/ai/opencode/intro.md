---
title: OpenCode 介绍
icon: opencode
order: 2
---

# OpenCode 介绍

## 概述

OpenCode 是一个开源的 AI 编程助手，由 Anomaly 公司开发维护。截至目前：

- **GitHub 星标**: 120K+
- **贡献者**: 800+
- **提交数**: 10,000+
- **月活开发者**: 500万+

## 核心功能

### 1. 智能编程辅助

```bash
# 直接对话式编程
opencode "帮我写一个排序算法"
opencode "解释这段代码的含义"
opencode "优化这个函数的性能"
```

### 2. 文件操作

```bash
# 读取文件
opencode read path/to/file

# 编辑文件
opencode edit path/to/file

# 创建新文件
opencode create path/to/newfile
```

### 3. 多会话支持

```bash
# 启动多个并行会话
opencode --session frontend  # 前端任务
opencode --session backend   # 后端任务
opencode --session docs      # 文档任务
```

### 4. Git 集成

```bash
# 自动提交
opencode commit "feat: 添加用户登录功能"

# 创建分支
opencode branch feature/new-feature
```

## 支持的语言

OpenCode 支持几乎所有主流编程语言：

- **前端**: JavaScript, TypeScript, HTML, CSS, Vue, React
- **后端**: Python, Java, Go, Rust, Node.js
- **移动端**: Swift, Kotlin, Flutter, React Native
- **其他**: C, C++, Ruby, PHP 等

## 应用场景

### 代码开发

```bash
# 从零开始开发功能
opencode "实现用户注册功能，包含表单验证"
```

### 代码审查

```bash
# 代码审查
opencode "审查这个 PR 的代码"
```

### Bug 修复

```bash
# 修复 Bug
opencode "修复登录页面的 CSRF 漏洞"
```

### 学习新技术

```bash
# 学习新框架
opencode "教我如何使用 FastAPI 框架"
```

## 技术架构

```
┌─────────────────┐
│   用户界面       │
│  (CLI/IDE/桌面)  │
└────────┬────────┘
         │
┌────────▼────────┐
│   核心引擎       │
│  (Agent Logic)  │
└────────┬────────┘
         │
┌────────▼────────┐
│   模型层        │
│  (LLM Provider) │
└─────────────────┘
```

## 隐私保护

OpenCode 非常注重用户隐私：

- **本地处理** - 代码不会离开你的机器
- **不存储数据** - 不存储任何代码或上下文数据
- **企业级安全** - 提供企业版本地部署方案

## 为什么选择 OpenCode？

| 特性 | OpenCode | 其他工具 |
|------|----------|----------|
| 开源 | ✓ | ✗ |
| 本地运行 | ✓ | ✗ |
| 多模型支持 | ✓ | ✗ |
| 免费使用 | ✓ | 限制 |
| 跨平台 | ✓ | ✓ |