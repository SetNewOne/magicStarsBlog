---
title: Python Web 框架
icon: python
order: 5
---

# Python Web 框架

## Flask

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/api/user/<int:user_id>')
def get_user(user_id):
    return jsonify({'id': user_id, 'name': '张三'})

@app.route('/api/user', methods=['POST'])
def create_user():
    data = request.get_json()
    return jsonify({'message': '创建成功', 'data': data}), 201

if __name__ == '__main__':
    app.run(debug=True)
```

## Django

```bash
# 安装
pip install django

# 创建项目
django-admin startproject myproject
cd myproject
python manage.py startapp blog

# 运行
python manage.py runserver
```

### 模型

```python
# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
```

### 视图

```python
# blog/views.py
from django.shortcuts import render
from django.http import JsonResponse
from .models import Post

def post_list(request):
    posts = Post.objects.all()
    data = [{'title': p.title, 'content': p.content} for p in posts]
    return JsonResponse(data, safe=False)
```

### URL 配置

```python
# myproject/urls.py
from django.urls import path
from blog import views

urlpatterns = [
    path('posts/', views.post_list),
]
```

## FastAPI

```python
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class User(BaseModel):
    name: str
    age: int
    email: Optional[str] = None

users = []

@app.get('/')
def read_root():
    return {'message': 'Hello, FastAPI!'}

@app.get('/users/{user_id}')
def read_user(user_id: int):
    return users[user_id]

@app.post('/users/')
def create_user(user: User):
    users.append(user.dict())
    return {'message': '创建成功'}

# 运行
# uvicorn main:app --reload
```

## 常用命令

```bash
# Flask
pip install flask
flask run

# Django
pip install django
django-admin startproject myproject
python manage.py migrate
python manage.py createsuperuser

# FastAPI
pip install fastapi uvicorn
uvicorn main:app --reload
```