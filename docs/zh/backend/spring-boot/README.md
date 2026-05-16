---
title: Spring Boot 知识体系
icon: spring
order: 3
---

# Spring Boot 知识体系

Spring Boot 是 Java 后端开发中最常见的生产框架之一。学习它的重点不是背注解，而是理解一个请求如何进入系统、如何执行业务、如何访问数据、如何处理事务和异常、最后如何稳定返回结果。

## 学习目标

- 能搭建规范的 REST API 服务。
- 能做参数校验、统一响应、统一异常处理。
- 能连接数据库并正确使用事务。
- 能实现登录认证和权限控制。
- 能写测试、看日志、做健康检查。
- 能理解 Spring Boot 2.x、3.x、4.x 的差异和升级风险。

## 版本选择

| 版本 | 定位 | 建议 |
|------|------|------|
| Spring Boot 2.x | 旧项目常见 | 维护存量系统需要掌握 |
| Spring Boot 3.5.x | 稳定生产线 | 新项目常见选择，要求 Java 17+ |
| Spring Boot 4.0.x | 新一代主线 | 可评估新项目，迁移前要检查生态兼容 |

## 标准分层

```text
controller  接收请求，做参数校验和返回结果
service     处理业务规则和事务
repository  访问数据库
domain      业务对象和领域模型
config      配置类
common      通用异常、响应、工具
```

## 请求处理链路

```text
HTTP 请求
  ↓
Controller
  ↓
参数校验
  ↓
Service 业务处理
  ↓
Repository 数据访问
  ↓
统一响应
```

## 核心模块

- Web MVC：接口、参数绑定、响应序列化。
- Validation：参数校验。
- Data：JPA、MyBatis、事务。
- Security：认证、授权、密码加密。
- Actuator：健康检查、指标。
- Test：单元测试、接口测试、集成测试。
