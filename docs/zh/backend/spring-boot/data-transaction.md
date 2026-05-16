---
title: 数据访问和事务
icon: database
order: 2
---

# 数据访问和事务

数据访问层要关注 SQL 正确性、事务边界、连接池和异常处理。

## Repository 职责

Repository 只负责数据读取和写入，不应包含复杂业务规则。

```java
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsername(String username);
}
```

使用 MyBatis 时，Mapper 也应保持职责清晰。

## 事务边界

```java
@Service
public class TransferService {
    @Transactional
    public void transfer(Long fromId, Long toId, BigDecimal amount) {
        accountRepository.decrease(fromId, amount);
        accountRepository.increase(toId, amount);
    }
}
```

事务通常放在 Service 层，因为 Service 更接近业务边界。

## 事务失效常见原因

- 同一个类内部方法直接调用，代理没有生效。
- 方法不是 `public`。
- 异常被捕获后没有继续抛出。
- 默认只对运行时异常回滚，受检异常需要额外配置。
- 数据库引擎或连接没有开启事务支持。

## 连接池关注点

- 最大连接数不能盲目调大。
- 慢 SQL 会占住连接，导致接口排队。
- 需要配置连接超时和空闲连接检查。
- 线上要观察连接池使用率。

## SQL 和 ORM 建议

- 简单 CRUD 可用 ORM。
- 复杂报表和性能敏感查询可写 SQL。
- 不要在循环中触发大量单条查询。
- 大批量写入要考虑批处理。
