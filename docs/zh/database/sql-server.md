---
title: SQL Server
icon: database
order: 3
---

# SQL Server 基础语法和技巧

SQL Server 常用于 Windows 生态、企业管理系统和数据分析场景。

## 创建表

```sql
CREATE TABLE users (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL UNIQUE,
    email NVARCHAR(100) NULL,
    status NVARCHAR(20) NOT NULL DEFAULT N'ACTIVE',
    created_at DATETIME2 NOT NULL DEFAULT SYSDATETIME()
);
```

## 增删改查

```sql
INSERT INTO users (username, email)
VALUES (N'zhangsan', N'zhangsan@example.com');

SELECT id, username, email
FROM users
WHERE status = N'ACTIVE'
ORDER BY created_at DESC
OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;

UPDATE users
SET email = N'new@example.com'
WHERE id = 1;

DELETE FROM users
WHERE id = 1;
```

## 常用函数

| 类型 | 函数 | 示例 |
|------|------|------|
| 字符串 | `CONCAT` | `CONCAT(first_name, last_name)` |
| 字符串 | `LEN` | `LEN(username)` |
| 日期 | `GETDATE` | `GETDATE()` |
| 日期 | `SYSDATETIME` | `SYSDATETIME()` |
| 日期 | `FORMAT` | `FORMAT(created_at, 'yyyy-MM-dd')` |
| 空值 | `ISNULL` | `ISNULL(email, N'未填写')` |

## TOP 查询

```sql
SELECT TOP (10) id, username
FROM users
ORDER BY created_at DESC;
```

`TOP` 适合简单取前几条；需要稳定分页时使用 `OFFSET ... FETCH`，并提供明确排序。

## 事务

```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT TRANSACTION;
-- 出错时使用 ROLLBACK TRANSACTION;
```

## 小技巧

- 中文字符串建议使用 `N'文本'`，并配合 `NVARCHAR`。
- 分页必须写 `ORDER BY`，否则结果顺序不稳定。
- 金额使用 `DECIMAL(p, s)`，不要用浮点类型保存精确金额。
- 更新或删除前先检查 `WHERE` 条件影响范围。
- 常用筛选列和关联列可以建立索引，但索引过多会拖慢写入。
