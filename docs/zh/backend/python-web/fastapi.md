---
title: FastAPI
icon: python
order: 2
---

# FastAPI

FastAPI 适合构建类型清晰的 API 服务，尤其适合异步接口、AI 工具接口和前后端分离项目。

## 最小示例

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class UserCreate(BaseModel):
    username: str
    email: str

@app.post("/users")
def create_user(user: UserCreate):
    return {"username": user.username, "email": user.email}
```

## 核心能力

- 路由声明清晰。
- Pydantic 自动校验请求数据。
- 自动生成 OpenAPI 文档。
- 支持 async/await。
- 依赖注入适合认证、数据库会话、配置注入。

## 依赖注入

```python
from fastapi import Depends

def get_current_user():
    return {"id": 1, "name": "admin"}

@app.get("/me")
def me(user=Depends(get_current_user)):
    return user
```

## 异步接口

```python
@app.get("/users/{user_id}")
async def get_user(user_id: int):
    user = await user_service.get_by_id(user_id)
    return user
```

异步适合 IO 密集操作。CPU 密集任务需要其他方案，例如任务队列或进程池。

## 注意事项

- 不要在 async 接口里调用阻塞 IO。
- Pydantic 模型应区分创建、更新、响应。
- 数据库会话生命周期要清晰。
- 生产部署常用 Uvicorn 或 Gunicorn + Uvicorn Worker。
