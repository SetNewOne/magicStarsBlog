---
title: Python 异步和测试
icon: python
order: 6
---

# Python 异步和测试

异步适合大量等待 IO 的任务，测试用于保证代码修改后行为仍然正确。

## asyncio 基础

```python
import asyncio

async def fetch_user(user_id: int) -> dict:
    await asyncio.sleep(1)
    return {"id": user_id, "name": "张三"}

async def main():
    user = await fetch_user(1)
    print(user)

asyncio.run(main())
```

`async def` 定义协程，`await` 等待异步结果。

## 并发执行

```python
async def main():
    users = await asyncio.gather(
        fetch_user(1),
        fetch_user(2),
        fetch_user(3),
    )
    print(users)
```

`asyncio.gather` 适合多个相互独立的异步任务。

## 异步适用场景

- 网络请求。
- 数据库访问。
- 文件或消息队列等 IO 密集任务。

CPU 密集任务不适合只靠 `asyncio` 提速，通常需要多进程、原生扩展或任务队列。

## pytest 基础

```python
def add(a: int, b: int) -> int:
    return a + b

def test_add():
    assert add(1, 2) == 3
```

测试文件通常命名为 `test_*.py` 或 `*_test.py`。

## 参数化测试

```python
import pytest

@pytest.mark.parametrize(
    "a,b,expected",
    [
        (1, 2, 3),
        (0, 0, 0),
        (-1, 1, 0),
    ],
)
def test_add(a, b, expected):
    assert add(a, b) == expected
```

参数化适合覆盖多组输入。

## 虚拟环境和依赖

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
pip freeze > requirements.txt
```

项目应使用虚拟环境隔离依赖，避免污染系统 Python。
