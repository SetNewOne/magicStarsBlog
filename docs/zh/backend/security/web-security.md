---
title: Web 安全基础
icon: shield-alert
order: 2
---

# Web 安全基础

Web 安全要从输入、输出、存储、传输和依赖五个角度检查。

## SQL 注入

错误示例：

```sql
SELECT * FROM users WHERE username = '${username}';
```

正确方向：

- 使用参数化查询。
- ORM 查询不要拼接用户输入。
- 对排序字段使用白名单。

## XSS

XSS 是恶意脚本注入页面。

防护：

- 输出 HTML 时做转义。
- 富文本内容做白名单过滤。
- Cookie 设置 `HttpOnly`。
- 配置合适的 CSP。

## CSRF

CSRF 利用用户登录态发起非预期请求。

防护：

- 使用 CSRF Token。
- Cookie 设置 `SameSite`。
- 关键操作校验来源和二次确认。

## 文件上传

防护：

- 限制文件大小。
- 校验 MIME 和扩展名。
- 文件重命名，避免覆盖。
- 不把上传目录作为可执行目录。
- 图片处理后再访问。

## 依赖安全

- 定期升级依赖。
- 关注安全公告。
- 使用依赖扫描工具。
- 删除不再使用的依赖。
