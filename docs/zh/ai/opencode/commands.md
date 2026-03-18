---
title: OpenCode 常用命令
icon: opencode
order: 5
---

# OpenCode 常用命令

## 基础命令

### 帮助和版本

```bash
# 查看帮助
opencode --help
opencode -h

# 查看版本
opencode --version
opencode -v
```

### 启动会话

```bash
# 启动默认会话
opencode

# 使用指定模型
opencode --model claude
opencode --model gpt-4
opencode --model gemini-pro

# 指定会话名称
opencode --session my-project
```

## 文件操作

### 读取

```bash
# 读取单个文件
opencode read path/to/file

# 读取并显示行号
opencode read -n path/to/file

# 读取多个文件
opencode read file1.js file2.py
```

### 搜索

```bash
# 搜索文本
opencode grep "function_name"
opencode grep "TODO"

# 搜索并显示行号
opencode grep -n "function_name"

# 正则搜索
opencode grep "user\.\w+"
```

### 列出文件

```bash
# 列出当前目录
opencode ls

# 列出指定目录
opencode ls src/

# 递归列出
opencode ls -R
```

## 代码操作

### 生成代码

```bash
# 生成代码片段
opencode "生成一个排序函数"

# 生成完整文件
opencode "创建一个 React 组件"
```

### 解释代码

```bash
# 解释文件
opencode explain path/to/file

# 解释选中内容
opencode explain
```

### 重构

```bash
# 重构文件
opencode refactor path/to/file

# 重构函数
opencode refactor function_name
```

### 测试

```bash
# 生成测试
opencode test path/to/file

# 运行测试
opencode test run

# 查看测试覆盖
opencode test coverage
```

## Git 操作

```bash
# 查看状态
opencode status

# 查看差异
opencode diff
opencode diff --staged

# 查看日志
opencode log
opencode log --oneline

# 提交
opencode commit "feat: 新功能"
opencode commit -m "fix: 修复 bug"

# 创建分支
opencode branch feature/new-feature
opencode checkout -b feature/new-feature
```

## 调试

```bash
# 运行程序
opencode run

# 调试模式
opencode debug

# 查看错误
opencode error

# 分析性能
opencode profile
```

## 配置

### 查看配置

```bash
# 查看当前配置
opencode config

# 查看特定配置
opencode config model
opencode config editor
```

### 修改配置

```bash
# 设置模型
opencode config set model gpt-4

# 设置编辑器
opencode config set editor vim

# 设置 API 密钥
opencode config set api_key.openai your-key
```

## 快捷方式

```bash
# 简写
oc          # opencode 别名
oc r        # read
oc e        # explain
oc g        # grep
oc s        # status
oc c        # commit
```

## 管道和组合

```bash
# 搜索并编辑
opencode grep "TODO" | opencode fix

# 读取并生成
opencode read src/utils.js | opencode refactor
```