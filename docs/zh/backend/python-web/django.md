---
title: Django
icon: python
order: 1
---

# Django

Django 适合快速构建完整业务系统，尤其适合有后台管理、内容发布、权限和数据库模型的项目。

## 核心组成

- URL：路由分发。
- View：处理请求。
- Model：数据库模型。
- Template：服务端模板。
- Admin：自动管理后台。
- Middleware：请求和响应中间处理。

## 模型示例

```python
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
```

## 视图示例

```python
from django.http import JsonResponse
from .models import Article

def article_list(request):
    articles = Article.objects.order_by("-created_at")[:20]
    data = [{"id": item.id, "title": item.title} for item in articles]
    return JsonResponse({"data": data})
```

## 适用场景

- 内容管理系统。
- 管理后台。
- 企业内部系统。
- 需要快速交付的传统业务系统。

## 注意事项

- ORM 查询要警惕 N+1 问题。
- 配置区分开发和生产环境。
- Admin 适合内部管理，不应无控制暴露到公网。
- 大项目需要清晰拆分 app。
