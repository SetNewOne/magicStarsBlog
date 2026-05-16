---
title: Flask
icon: python
order: 3
---

# Flask

Flask 是轻量 Web 框架，适合小型 API、内部工具、教学项目和需要高度自定义的服务。

## 最小示例

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.get("/health")
def health():
    return jsonify({"status": "ok"})

@app.post("/users")
def create_user():
    data = request.get_json()
    return jsonify({"name": data["name"]}), 201
```

## 蓝图

蓝图用于拆分模块。

```python
from flask import Blueprint

user_bp = Blueprint("users", __name__, url_prefix="/users")

@user_bp.get("")
def list_users():
    return {"data": []}
```

## 适用场景

- 内部管理工具。
- 小型接口服务。
- Webhook 接收服务。
- 快速验证业务想法。

## 注意事项

- 大项目需要自己建立分层和规范。
- 参数校验、认证、数据库访问需要选择扩展或自行封装。
- 生产环境不要使用开发服务器。
- 配置和密钥应通过环境变量管理。
