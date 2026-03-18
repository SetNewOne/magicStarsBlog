---
title: Python 数据类型
icon: python
order: 4
---

# Python 数据类型

## 数字类型

```python
# 整数
age = 25
count = 1000000000000

# 浮点数
price = 19.99
pi = 3.141592653589793

# 复数
complex_num = 3 + 4j

# 数值运算
10 + 5    # 加
10 - 5    # 减
10 * 5    # 乘
10 / 5    # 除（结果是浮点数）
10 // 5   # 整除
10 % 3    # 取余
10 ** 2   # 幂运算

# 内置函数
abs(-5)        # 绝对值
pow(2, 3)      # 2的3次方
round(3.7)     # 四舍五入
divmod(10, 3)  # (商, 余数)
```

## 字符串

```python
# 创建
s1 = 'hello'
s2 = "hello"
s3 = '''多行
字符串'''

# 格式化
name = "张三"
age = 25

# f-string（推荐）
print(f"名字: {name}, 年龄: {age}")

# format
print("名字: {}, 年龄: {}".format(name, age))
print("名字: {0}, 年龄: {1}".format(name, age))
print("名字: {name}, 年龄: {age}".format(name="张三", age=25))

# % 格式化
print("名字: %s, 年龄: %d" % (name, age))

# 常用方法
s = "  Hello, World!  "
s.strip()           # 去除两端空格
s.lower()           # 转小写
s.upper()           # 转大写
s.capitalize()      # 首字母大写
s.title()           # 每个单词首字母大写
s.replace("World", "Python")  # 替换
s.split(",")        # 分割
",".join(["a","b"]) # 连接
s.startswith("He")  # 开头
s.endswith("lo!")   # 结尾
s.find("World")     # 查找
s.isdigit()         # 是否数字
s.isalpha()         # 是否字母
s.isalnum()         # 是否字母数字
```

## 列表

```python
# 创建
fruits = ["苹果", "香蕉", "橙子"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# 索引访问
fruits[0]      # 第一个
fruits[-1]     # 最后一个

# 切片
numbers[1:4]   # 2,3,4
numbers[:3]    # 1,2,3
numbers[::2]   # 1,3,5 (隔一个)
numbers[::-1]  # 5,4,3,2,1 (倒序)

# 修改
fruits[0] = "葡萄"
fruits.append("西瓜")     # 末尾添加
fruits.insert(1, "梨")    # 插入
fruits.extend(["桃", "李"])# 批量添加

# 删除
fruits.pop()           # 末尾删除
fruits.pop(0)          # 删除指定位置
fruits.remove("香蕉")  # 删除第一个匹配值
del fruits[0]          # 删除
fruits.clear()         # 清空

# 排序
numbers.sort()              # 原地排序
sorted(numbers)             # 返回新列表
numbers.sort(reverse=True)  # 倒序

# 列表推导式
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
```

## 元组

```python
# 创建
t = (1, 2, 3)
t = 1, 2, 3  # 圆括号可以省略
single = (1,) # 单元素元组

# 不可变性 - 不能修改
# t[0] = 0  # 报错

# 常用操作
t.index(2)    # 查找位置
t.count(1)    # 计数
len(t)        # 长度

# 解包
a, b, c = (1, 2, 3)
x, *y, z = (1, 2, 3, 4, 5)  # x=1, y=[2,3,4], z=5
```

## 字典

```python
# 创建
person = {"name": "张三", "age": 25}
person = dict(name="张三", age=25)

# 访问
person["name"]          # 获取值
person.get("name")      # 获取（不存在不报错）
person.get("gender", "未知")  # 默认值

# 修改
person["age"] = 26               # 修改
person["gender"] = "男"          # 添加
person.update({"city": "北京", "age": 27})  # 批量更新

# 删除
del person["gender"]
person.pop("age")
person.popitem()  # 删除最后一个

# 遍历
for key in person:
    print(key, person[key])

for key, value in person.items():
    print(f"{key}: {value}")

# 字典推导式
squares = {x: x**2 for x in range(5)}
```

## 集合

```python
# 创建
fruits = {"苹果", "香蕉", "橙子"}
numbers = set([1, 2, 3, 2, 1])  # {1, 2, 3}

# 操作
fruits.add("葡萄")       # 添加
fruits.remove("香蕉")    # 删除（不存在报错）
fruits.discard("西瓜")   # 删除（不存在不报错）
fruits.pop()             # 删除任意一个

# 集合运算
a = {1, 2, 3}
b = {2, 3, 4}

a | b        # 并集 {1, 2, 3, 4}
a & b        # 交集 {2, 3}
a - b        # 差集 {1}
a ^ b        # 对称差集 {1, 4}

# 子集/超集
a.issubset(b)   # 子集
a.issuperset(b) # 超集

# 集合推导式
squares = {x**2 for x in range(10)}
```

## 布尔值

```python
# True / False
is_active = True
is_deleted = False

# 假值（falsy）
# False, None, 0, '', [], {}, set()

# 布尔运算
a and b   # 与
a or b    # 或
not a     # 非
```