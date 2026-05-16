---
title: Spring Security
icon: shield-check
order: 3
---

# Spring Security

Spring Security 负责认证和授权。认证回答“你是谁”，授权回答“你能做什么”。

## 核心概念

| 概念 | 说明 |
|------|------|
| Principal | 当前登录用户 |
| Authentication | 认证信息 |
| Authorization | 权限判断 |
| SecurityFilterChain | 安全过滤链 |
| PasswordEncoder | 密码哈希 |

## 密码存储

密码不能明文保存，应保存哈希结果。

```java
PasswordEncoder encoder = new BCryptPasswordEncoder();
String encoded = encoder.encode("password");
boolean matches = encoder.matches("password", encoded);
```

## JWT 认证流程

```text
用户登录
  ↓
服务端校验用户名密码
  ↓
签发 token
  ↓
前端请求时携带 token
  ↓
服务端解析 token 并建立认证上下文
```

## 权限模型

常见模型：

- 用户拥有角色。
- 角色拥有权限。
- 接口或菜单绑定权限点。

```text
user -> roles -> permissions
```

## 安全建议

- 登录失败不要暴露“用户不存在”还是“密码错误”。
- token 设置过期时间。
- 管理端接口必须做权限判断。
- 重要操作记录审计日志。
- 跨域、CSRF、Cookie 安全策略要按项目形态配置。
