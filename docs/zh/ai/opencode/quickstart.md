---
title: OpenCode 快速开始
icon: opencode
order: 4
---

# OpenCode 快速开始

## 首次启动

```bash
# 启动 OpenCode
opencode
```

首次启动会引导你完成基本配置：

1. 选择默认模型
2. 配置 API 密钥
3. 选择编辑器

## 基本使用

### 对话模式

```bash
# 启动交互式对话
opencode

# 指定模型启动
opencode --model claude

# 指定模型和参数
opencode --model gpt-4 --temperature 0.7
```

### 单次命令

```bash
# 执行单个任务
opencode "帮我写一个 Hello World 程序"

# 读取文件内容
opencode read src/main.py

# 解释代码
opencode explain src/utils.js

# 重构代码
opencode refactor src/app.js
```

## 核心命令

### 文件操作

```bash
# 列出文件
opencode ls
opencode ls src/

# 读取文件
opencode read path/to/file

# 搜索内容
opencode grep "function"

# 创建文件
opencode create src/newfeature.js

# 编辑文件
opencode edit path/to/file
```

### 代码操作

```bash
# 生成代码
opencode generate "创建一个用户登录的 React 组件"

# 解释代码
opencode explain path/to/file

# 修复 Bug
opencode fix "修复这个函数的空指针问题"

# 重构
opencode refactor "将这个类改为函数式组件"

# 添加测试
opencode test "为这个函数添加单元测试"
```

### Git 操作

```bash
# 查看状态
opencode status

# 查看差异
opencode diff

# 提交更改
opencode commit "feat: 添加用户认证功能"

# 创建分支
opencode branch feature/new-feature
```

## 工作流程示例

### 1. 开始新任务

```bash
# 启动新会话
opencode

# 告诉 AI 你的需求
> 我想创建一个天气预报应用
```

### 2. AI 会帮你

1. 分析需求
2. 创建项目结构
3. 编写代码
4. 添加测试

### 3. 审查和提交

```bash
# 查看更改
opencode diff

# 如果满意，提交
opencode commit "feat: 添加天气预报功能"
```

## 技巧和最佳实践

### 清晰描述需求

```bash
# ✓ 好
opencode "创建一个用户登录表单，包含邮箱和密码字段，需要表单验证"

# ✗ 差
opencode "登录"
```

### 分步骤进行

```bash
# 分步骤
opencode "先创建项目结构"
# 等待完成
opencode "现在添加登录功能"
```

### 使用上下文

```bash
# 引用具体文件
opencode "优化 src/utils.js 中的排序算法"

# 引用具体行
opencode "修复 src/api/user.js 第 25 行的错误"
```

## 快捷键

在交互模式下：

- `Ctrl+C` - 取消当前操作
- `Ctrl+D` - 退出
- `Ctrl+L` - 清屏
- `Tab` - 自动补全