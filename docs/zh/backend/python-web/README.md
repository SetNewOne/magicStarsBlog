---
title: Python Web 知识体系
icon: python
order: 4
---

# Python Web 知识体系

Python Web 开发常见选择是 Django、FastAPI 和 Flask。它们都能写接口，但适合的项目不同。

## 框架选择

| 框架 | 适合场景 | 特点 |
|------|----------|------|
| Django 5.2 LTS | 内容系统、管理后台、传统业务系统 | 内置能力完整，ORM 和 Admin 强 |
| FastAPI 0.136.x | API 服务、异步服务、AI 工具接口 | 类型驱动，自动生成 OpenAPI |
| Flask 3.1.x | 小型服务、内部工具、轻量 API | 简洁灵活，扩展自由 |

## 学习目标

- 能根据业务选择合适框架。
- 能写清晰的路由、请求模型和响应模型。
- 能连接数据库并组织数据访问层。
- 能处理认证、权限、异常和日志。
- 能写测试并部署服务。

## 通用目录结构

```text
app/
├── api/
├── core/
├── models/
├── schemas/
├── services/
├── repositories/
└── main.py
```

小项目可以简化，大项目应保持分层清楚。
