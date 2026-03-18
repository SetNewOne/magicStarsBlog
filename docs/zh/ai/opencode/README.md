---
title: OpenCode 入门
icon: opencode
order: 1
---

# OpenCode 入门

OpenCode 是一个开源的 AI 编程助手，帮助你在终端、IDE 或桌面应用中编写代码。

## 什么是 OpenCode？

OpenCode 是一个开源的 AI 编程代理（Agent），能够帮助你：

- **智能代码补全** - 自动补全代码片段
- **代码解释** - 解释代码的功能和逻辑
- **Bug 修复** - 自动发现和修复代码中的问题
- **重构建议** - 提供代码优化建议
- **学习辅助** - 解答编程问题

## 主要特点

- **LSP 支持** - 自动加载正确的 LSP（语言服务器协议）
- **多会话** - 可以在同一个项目上并行启动多个代理
- **分享链接** - 分享任何会话的链接以便参考或调试
- **广泛兼容** - 支持 75+ LLM 提供商，包括本地模型
- **多平台** - 支持终端、桌面应用和 IDE 插件

## 安装

```bash
# macOS
brew install opencode

# Linux
curl -fsSL https://opencode.ai/install | bash

# Windows
winget install OpenCode
```

## 快速开始

```bash
# 启动 OpenCode
opencode

# 指定模型
opencode --model claude

# 读取文件
opencode read src/main.py

# 执行任务
opencode "帮我重构这个函数"
```

## 模型选择

OpenCode 支持多种模型：

- **免费模型** - 内置免费模型
- **Claude** - Anthropic 的 Claude
- **GPT** - OpenAI 的 ChatGPT
- **Gemini** - Google 的 Gemini
- **本地模型** - 通过 Ollama 等运行本地模型

## 官方资源

- 官网：[https://opencode.ai](https://opencode.ai)
- GitHub：[https://github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)
- 文档：[https://opencode.ai/docs](https://opencode.ai/docs)