---
title: Spring Boot REST API
icon: spring
order: 1
---

# Spring Boot REST API

REST API 的目标是让接口语义清晰、输入可校验、输出稳定、错误可理解。

## Controller 示例

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public UserResponse getById(@PathVariable Long id) {
        return userService.getById(id);
    }

    @PostMapping
    public UserResponse create(@Valid @RequestBody CreateUserRequest request) {
        return userService.create(request);
    }
}
```

## 请求 DTO

```java
public record CreateUserRequest(
        @NotBlank(message = "用户名不能为空")
        String username,

        @Email(message = "邮箱格式不正确")
        String email
) {
}
```

DTO 用于接口输入输出，不建议直接暴露数据库实体。

## 统一响应

```java
public record ApiResponse<T>(
        int code,
        String message,
        T data
) {
    public static <T> ApiResponse<T> success(T data) {
        return new ApiResponse<>(0, "success", data);
    }
}
```

统一响应结构能降低前后端沟通成本。

## 分页接口

```text
GET /api/users?page=1&pageSize=20&keyword=zhang
```

分页要约定：

- 页码从 0 还是 1 开始。
- 最大 pageSize 限制。
- 排序字段白名单。
- 空结果返回空列表，而不是 `null`。
