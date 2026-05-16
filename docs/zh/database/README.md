---
title: 数据库概述
icon: database
order: 4
---

# 数据库

数据库用于持久化存储和查询数据。本模块整理 MySQL、Oracle、SQL Server 的基础语法、常用函数和实用技巧。

## 学习路线

```
SQL 基础 → 表设计 → 查询优化 → 事务和锁 → 数据库差异
```

## 核心能力

- 创建库表和约束。
- 编写增删改查语句。
- 使用聚合、分组、排序和分页。
- 理解事务、索引和执行计划。
- 识别不同数据库的语法差异。

## 通用 SQL 示例

```sql
SELECT department_id, COUNT(*) AS user_count
FROM users
WHERE status = 'ACTIVE'
GROUP BY department_id
HAVING COUNT(*) > 5
ORDER BY user_count DESC;
```

## 数据库差异提醒

| 能力 | MySQL | Oracle | SQL Server |
|------|-------|--------|------------|
| 字符串拼接 | `CONCAT(a, b)` | `a || b` | `CONCAT(a, b)` 或 `a + b` |
| 当前时间 | `NOW()` | `SYSDATE` | `GETDATE()` |
| 分页 | `LIMIT` | `OFFSET ... FETCH` | `OFFSET ... FETCH` |
| 自增主键 | `AUTO_INCREMENT` | Identity 或 Sequence | `IDENTITY` |

不同数据库都支持标准 SQL 的大部分能力，但函数、分页、自增和日期处理经常不同。
