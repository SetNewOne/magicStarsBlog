---
title: Python 进阶
icon: python
order: 5
---

# Python 进阶

Python 进阶学习重点包括函数式能力、迭代器、上下文管理、异常处理和类型标注。

## 列表推导式

```python
numbers = [1, 2, 3, 4, 5]
squares = [n * n for n in numbers if n % 2 == 0]
```

推导式适合简单转换，逻辑复杂时应改用普通循环。

## 迭代器和生成器

```python
def read_lines(path):
    with open(path, encoding="utf-8") as file:
        for line in file:
            yield line.strip()
```

生成器按需产出数据，适合处理大文件或数据流。

## 装饰器

```python
from functools import wraps

def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"调用 {func.__name__}")
        return func(*args, **kwargs)

    return wrapper

@log_call
def add(a, b):
    return a + b
```

装饰器常用于日志、权限、缓存和性能统计。

## 上下文管理器

```python
from contextlib import contextmanager

@contextmanager
def open_file(path):
    file = open(path, encoding="utf-8")
    try:
        yield file
    finally:
        file.close()
```

`with` 能确保资源被正确释放。

## 异常处理

```python
try:
    value = int(text)
except ValueError as exc:
    raise ValueError("请输入有效数字") from exc
```

建议：

- 捕获具体异常，不要随意捕获所有异常。
- 重新抛出异常时保留原始原因。
- 不要用异常控制正常业务流程。

## 类型标注

```python
def greet(name: str) -> str:
    return f"你好，{name}"

def total(values: list[int]) -> int:
    return sum(values)
```

类型标注不会自动强制运行时类型，但能提升编辑器提示、重构和静态检查体验。
