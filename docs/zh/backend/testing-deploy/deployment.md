---
title: 部署和运维
icon: rocket
order: 2
---

# 部署和运维

部署不是把代码复制到服务器，而是让服务以可配置、可观察、可恢复的方式运行。

## 构建产物

Java 常见产物：

```text
app.jar
Docker image
```

Python 常见方式：

```text
requirements.txt / pyproject.toml
Docker image
```

## Dockerfile 示例

```dockerfile
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## 健康检查

健康检查用于判断服务是否可接收流量。

```text
GET /actuator/health
GET /health
```

健康检查应覆盖：

- 服务进程是否存活。
- 数据库是否可连接。
- 关键依赖是否可用。

## 配置管理

配置来源：

- 环境变量。
- 配置文件。
- 配置中心。
- 容器编排平台 Secret。

密钥和生产配置不能提交到代码仓库。

## 发布策略

- 滚动发布。
- 蓝绿发布。
- 灰度发布。
- 快速回滚。

上线后要观察错误率、接口耗时和资源使用。
