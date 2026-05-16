---
title: 后端测试
icon: flask
order: 1
---

# 后端测试

后端测试要覆盖业务逻辑、数据访问和接口契约。

## 单元测试

适合测试纯业务逻辑。

```java
class PriceServiceTest {
    @Test
    void shouldCalculateTotalPrice() {
        PriceService service = new PriceService();
        BigDecimal total = service.total(new BigDecimal("10.00"), 2);

        assertEquals(new BigDecimal("20.00"), total);
    }
}
```

## 接口测试

Spring Boot 可使用 MockMvc：

```java
mockMvc.perform(get("/api/users/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.data.id").value(1));
```

Python 可使用 pytest：

```python
def test_health(client):
    response = client.get("/health")
    assert response.status_code == 200
```

## 集成测试

集成测试关注真实依赖：

- 数据库。
- Redis。
- 消息队列。
- 第三方服务 Mock。

## 测试数据

- 每个测试准备自己的数据。
- 测试结束清理数据。
- 不依赖测试执行顺序。
- 不连接生产数据库。
