---
title: Python 入门
icon: python
order: 2
---

# Python 入门

Python 是一种简洁优雅的编程语言，应用广泛。

## Python 特点

- **简洁易读** - 代码像英语一样自然
- **多范式** - 支持面向对象、函数式、过程式
- **丰富的库** - 标准库和第三方库丰富
- **跨平台** - Windows、Mac、Linux 都能运行
- **应用广泛** - Web 开发、数据分析、人工智能

## 开发环境

### 安装 Python

```bash
# Windows - 下载安装包
# https://www.python.org/downloads/

# Linux (Ubuntu)
sudo apt update
sudo apt install python3

# macOS
brew install python3

# 验证
python3 --version
```

### pip 包管理

```bash
# 安装包
pip install requests

# 升级 pip
pip install --upgrade pip

# 虚拟环境
python -m venv myenv
source myenv/bin/activate  # Linux/Mac
myenv\Scripts\activate     # Windows
```

## 第一个程序

```python
print("Hello, World!")
```

## 基础语法

### 变量

```python
# 变量不需要声明类型
name = "张三"
age = 25
height = 1.75
is_student = True

# 多个变量
x, y, z = 1, 2, 3
a = b = c = 0
```

### 数据类型

```python
# 数字
int_num = 10
float_num = 3.14
complex_num = 1 + 2j

# 字符串
s1 = 'hello'
s2 = "world"
s3 = '''多行
字符串'''

# 布尔
flag = True
flag = False

# 空值
none_val = None
```

### 基本运算

```python
# 算术
a + b, a - b, a * b, a / b
a // b  # 整除
a ** b  # 幂
a % b   # 余数

# 比较
a == b, a != b, a > b, a < b
a >= b, a <= b

# 逻辑
a and b, a or b, not a
```

### 流程控制

```python
# if-elif-else
if age >= 18:
    print("成年")
elif age >= 12:
    print("青少年")
else:
    print("儿童")

# for 循环
for i in range(5):  # 0,1,2,3,4
    print(i)

for item in items:
    print(item)

# while 循环
while condition:
    pass

# 三元表达式
result = "成年" if age >= 18 else "未成年"
```

## 数据结构

### 列表

```python
# 创建
fruits = ["苹果", "香蕉", "橙子"]
numbers = list(range(10))

# 操作
fruits.append("葡萄")
fruits.insert(0, "西瓜")
fruits.remove("苹果")
del fruits[0]
fruits.pop()

# 切片
numbers[0:3]    # 前3个
numbers[::2]    # 隔一个
numbers[::-1]   # 倒序
```

### 元组

```python
# 创建（不可变）
point = (1, 2)
single = (1,)  # 单元素元组

# 解包
x, y = point
```

### 字典

```python
# 创建
person = {"name": "张三", "age": 25}
person = dict(name="张三", age=25)

# 操作
person["name"] = "李四"
person.get("name")
del person["age"]
person.keys(), person.values(), person.items()

# 遍历
for key, value in person.items():
    print(f"{key}: {value}")
```

### 集合

```python
# 创建
fruits = {"苹果", "香蕉", "橙子"}
numbers = set([1, 2, 3])

# 操作
fruits.add("葡萄")
fruits.remove("苹果")
fruits & other  # 交集
fruits | other  # 并集
fruits - other  # 差集
```

## 函数

```python
# 定义
def greet(name):
    return f"你好，{name}"

# 默认参数
def greet(name="朋友"):
    return f"你好，{name}"

# 可变参数
def sum(*args):
    total = 0
    for n in args:
        total += n
    return total

# Lambda
square = lambda x: x ** 2
```