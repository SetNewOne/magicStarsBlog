---
title: Python 基础语法
icon: python
order: 3
---

# Python 基础语法

## 注释

```python
# 单行注释

"""
多行注释
可以使用三个引号
"""

'''
也可以使用单引号
'''
```

## 输入输出

```python
# 输出
print("Hello")
print("a:", a, "b:", b)
print(f"名字: {name}")  # f-string
print("Hello", end=" ")  # 不换行

# 输入
name = input("请输入名字: ")
age = int(input("请输入年龄: "))
```

## 字符串

```python
# 字符串创建
s = 'hello'
s = "hello"
s = '''多行
字符串'''

# 常用操作
s.upper()           # 大写
s.lower()           # 小写
s.strip()           # 去除空格
s.split(',')        # 分割
s.join(list)        # 连接
s.replace('a', 'b') # 替换
s.find('ello')      # 查找
s.startswith('he')  # 开头
s.endswith('lo')    # 结尾
len(s)              # 长度

# 切片
s[0:5]      # 前5个字符
s[::2]      # 隔一个取
s[::-1]     # 倒序
```

## 类型转换

```python
int('123')      # 字符串转整数
float('3.14')   # 转浮点
str(123)        # 转字符串
list('abc')     # 转列表 ['a', 'b', 'c']
ord('A')        # 字符转 ASCII
chr(65)         # ASCII 转字符
bool(1)         # 转布尔（非0为True）
```

## 列表操作

```python
numbers = [1, 2, 3, 4, 5]

# 添加
numbers.append(6)      # 末尾添加
numbers.insert(0, 0)   # 指定位置插入
numbers.extend([7, 8]) # 批量添加

# 删除
numbers.pop()          # 删除末尾
numbers.pop(0)         # 删除指定位置
numbers.remove(3)      # 删除第一个匹配值
del numbers[0]         # 删除
numbers.clear()        # 清空

# 查找
numbers.index(3)       # 查找位置
numbers.count(3)       # 出现次数
3 in numbers           # 是否存在

# 排序
numbers.sort()         # 原地排序
sorted(numbers)        # 返回新列表
numbers.reverse()      # 倒序
```

## 常用函数

```python
# 内置函数
len(list)          # 长度
max(list)          # 最大值
min(list)          # 最小值
sum(list)          # 求和
abs(-5)            # 绝对值
round(3.14)        # 四舍五入
range(10)          # 0-9
enumerate(list)    # 索引和值
zip(list1, list2)  # 打包
map(func, list)    # 映射
filter(func, list) # 过滤
```

## 文件操作

```python
# 读取
with open('file.txt', 'r', encoding='utf-8') as f:
    content = f.read()           # 全部读取
    lines = f.readlines()        # 按行读取
    line = f.readline()          # 读取一行
    
# 写入
with open('file.txt', 'w', encoding='utf-8') as f:
    f.write('内容')              # 写入
    f.writelines(lines)         # 批量写入

# 追加
with open('file.txt', 'a', encoding='utf-8') as f:
    f.write('\n追加内容')
```