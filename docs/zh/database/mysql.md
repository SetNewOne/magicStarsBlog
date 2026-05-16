---
title: MySQL
icon: database
order: 1
---

# MySQL 基础语法和技巧

MySQL 常用于 Web 应用、业务系统和中小型数据服务。

## 创建表

```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100),
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## 增删改查

```sql
INSERT INTO users (username, email)
VALUES ('zhangsan', 'zhangsan@example.com');

SELECT id, username, email
FROM users
WHERE status = 'ACTIVE'
ORDER BY created_at DESC
LIMIT 10 OFFSET 0;

UPDATE users
SET email = 'new@example.com'
WHERE id = 1;

DELETE FROM users
WHERE id = 1;
```

## 常用函数

| 类型 | 函数 | 示例 |
|------|------|------|
| 字符串 | `CONCAT` | `CONCAT(first_name, last_name)` |
| 字符串 | `LENGTH` | `LENGTH(username)` |
| 日期 | `NOW` | `NOW()` |
| 日期 | `DATE_FORMAT` | `DATE_FORMAT(created_at, '%Y-%m-%d')` |
| 空值 | `IFNULL` | `IFNULL(email, '未填写')` |
| 条件 | `CASE` | `CASE WHEN status = 'ACTIVE' THEN '启用' ELSE '停用' END` |

## 分组统计

```sql
SELECT status, COUNT(*) AS total
FROM users
GROUP BY status
HAVING COUNT(*) > 10;
```

## 事务

```sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;
-- 出错时使用 ROLLBACK;
```

## 小技巧

- `WHERE` 条件尽量命中索引列，避免在索引列上包函数。
- 查询列表不要长期使用 `SELECT *`，只取需要的列。
- `LIKE 'abc%'` 通常比 `LIKE '%abc%'` 更容易使用索引。
- 金额使用 `DECIMAL`，不要使用浮点类型保存精确金额。
- 生产环境删除或更新前先用相同条件 `SELECT` 检查影响范围。
