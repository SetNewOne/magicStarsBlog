---
title: OpenCode 安装
icon: opencode
order: 3
---

# OpenCode 安装

## 系统要求

- **操作系统**: macOS、Windows、Linux
- **内存**: 至少 4GB RAM（推荐 8GB+）
- **存储**: 至少 500MB 可用空间
- **网络**: 需要网络连接以使用云端 AI 模型

## 安装方法

### macOS

```bash
# 使用 Homebrew（推荐）
brew install opencode

# 或使用 curl
curl -fsSL https://opencode.ai/install | bash
```

### Linux

```bash
# 使用 curl（推荐）
curl -fsSL https://opencode.ai/install | bash

# 或使用包管理器
# Arch Linux
paru -S opencode

# Debian/Ubuntu
sudo apt install opencode
```

### Windows

```bash
# 使用 winget（推荐）
winget install OpenCode

# 或使用 scoop
scoop install opencode

# 或使用 Chocolatey
choco install opencode
```

### 手动安装

```bash
# 下载最新版本
curl -LO https://github.com/anomalyco/opencode/releases/latest/download/opencode-{版本}-{平台}.tar.gz

# 解压
tar -xzf opencode-{版本}-{平台}.tar.gz

# 移动到 PATH
sudo mv opencode /usr/local/bin/

# 验证安装
opencode --version
```

## 配置 API 密钥

### OpenAI

```bash
# 设置 OpenAI API 密钥
export OPENAI_API_KEY="your-api-key"
```

### Anthropic (Claude)

```bash
# 设置 Anthropic API 密钥
export ANTHROPIC_API_KEY="your-api-key"
```

### Google (Gemini)

```bash
# 设置 Google API 密钥
export GOOGLE_API_KEY="your-api-key"
```

## 配置文件

OpenCode 的配置文件位于 `~/.opencode/config.yaml`：

```yaml
# 模型配置
model:
  provider: openai
  model: gpt-4

# API 密钥（也可以通过环境变量设置）
api_keys:
  openai: ${OPENAI_API_KEY}
  anthropic: ${ANTHROPIC_API_KEY}

# 编辑器配置
editor: vim  # vim, nano, code, etc.

# 其他选项
verbose: false
auto_save: true
```

## 验证安装

```bash
# 查看版本
opencode --version

# 测试运行
opencode --help
```

## 常见问题

### 安装失败

```bash
# 如果权限不足
sudo chown $(whoami) /usr/local/bin/opencode

# 如果路径不在 PATH 中
export PATH="$PATH:/usr/local/bin"
```

### 网络问题

```bash
# 设置代理
export HTTP_PROXY="http://proxy:8080"
export HTTPS_PROXY="http://proxy:8080"
```