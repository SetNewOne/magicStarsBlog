---
title: HTTP 和浏览器缓存
icon: network
order: 2
---

# HTTP 和浏览器缓存

前端开发需要理解请求从浏览器发出后发生了什么，以及浏览器为什么会使用缓存。

## 常见状态码

| 状态码 | 含义 |
|--------|------|
| 200 | 请求成功 |
| 201 | 创建成功 |
| 204 | 成功但没有响应体 |
| 301 / 302 | 重定向 |
| 304 | 使用协商缓存 |
| 400 | 请求参数错误 |
| 401 | 未登录或认证失败 |
| 403 | 没有权限 |
| 404 | 资源不存在 |
| 500 | 服务端错误 |

## 缓存类型

### 强缓存

浏览器不请求服务器，直接使用本地缓存。

```http
Cache-Control: max-age=31536000
```

适合带 hash 的静态资源。

### 协商缓存

浏览器询问服务器资源是否变化。

```http
ETag: "abc123"
If-None-Match: "abc123"
```

未变化时服务器返回 `304`。

## 跨域

浏览器的同源策略会限制不同协议、域名或端口之间的请求。

服务端常见响应头：

```http
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET,POST,PUT,DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```

开发环境常用代理解决跨域，生产环境应由后端或网关正确配置 CORS。

## 请求排查

1. 看 Network 面板请求是否发出。
2. 看状态码和响应体。
3. 看请求头是否带 token。
4. 看是否命中缓存。
5. 看是否被 CORS 或 Mixed Content 拦截。
