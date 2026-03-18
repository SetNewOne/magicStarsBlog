---
title: OpenCode 技能系统
icon: opencode
order: 6
---

# OpenCode 技能系统

OpenCode 的技能系统允许 AI 使用各种工具来帮助你完成编程任务。

## 内置技能

### 1. 代码解释

```
技能：explain
功能：解释代码的功能和逻辑
用法：opencode explain [file] [lines]
```

### 2. 代码生成

```
技能：generate
功能：根据描述生成代码
用法：opencode generate [描述]
```

### 3. 代码重构

```
技能：refactor
功能：重构和优化代码
用法：opencode refactor [file]
```

### 4. Bug 修复

```
技能：fix
功能：自动修复代码中的错误
用法：opencode fix [file]
```

### 5. 测试生成

```
技能：test
功能：生成单元测试
用法：opencode test [file]
```

### 6. 文档生成

```
技能：docs
功能：生成代码文档
用法：opencode docs [file]
```

## 技能列表

| 技能名称 | 命令 | 功能 |
|----------|------|------|
| explain | `opencode explain` | 解释代码 |
| generate | `opencode generate` | 生成代码 |
| refactor | `opencode refactor` | 重构代码 |
| fix | `opencode fix` | 修复 Bug |
| test | `opencode test` | 生成测试 |
| docs | `opencode docs` | 生成文档 |
| review | `opencode review` | 代码审查 |
| debug | `opencode debug` | 调试代码 |
| optimize | `opencode optimize` | 性能优化 |

## 使用示例

### 代码解释

```bash
# 解释整个文件
opencode explain src/utils.js

# 解释特定行
opencode explain src/utils.js:10-20

# 解释函数
opencode explain function sortArray
```

### Bug 修复

```bash
# 修复当前错误
opencode fix

# 修复指定文件
opencode fix src/auth.js

# 修复特定问题
opencode fix "空指针异常"
```

### 代码生成

```bash
# 生成 React 组件
opencode generate "用户列表组件"

# 生成 API 接口
opencode generate "用户 CRUD API"

# 生成算法
opencode generate "快速排序算法"
```

## 自定义技能

你可以通过配置文件添加自定义技能：

```yaml
# ~/.opencode/config.yaml
skills:
  - name: deploy
    description: 部署应用到服务器
    command: npm run deploy
    
  - name: lint
    description: 运行代码检查
    command: npm run lint
```

## 技能开发

### 创建自定义技能

```javascript
// skills/my-skill.js
module.exports = {
  name: 'my-skill',
  description: '我的自定义技能',
  execute: async (context, args) => {
    // 实现技能逻辑
    return { result: 'success' };
  }
};
```

### 技能最佳实践

1. **单一职责** - 每个技能只做一件事
2. **错误处理** - 妥善处理异常情况
3. **日志记录** - 记录关键操作
4. **测试覆盖** - 为技能编写测试