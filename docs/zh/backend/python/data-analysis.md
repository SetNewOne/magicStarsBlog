---
title: Python 数据分析
icon: python
order: 6
---

# Python 数据分析

## NumPy

```python
import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])
arr2d = np.array([[1, 2, 3], [4, 5, 6]])

# 常用函数
np.zeros((3, 3))      # 全零
np.ones((3, 3))       # 全一
np.eye(3)             # 单位矩阵
np.arange(10)         # 0-9
np.linspace(0, 10, 5) # 等差数列

# 操作
arr.shape             # 形状
arr.reshape(2, 3)     # 变形
arr[0]                # 索引
arr[1:3]              # 切片
arr > 3               # 布尔索引

# 数学运算
np.sum(arr)
np.mean(arr)
np.max(arr)
np.min(arr)
np.std(arr)
```

## Pandas

```python
import pandas as pd

# 创建 DataFrame
df = pd.DataFrame({
    'name': ['张三', '李四', '王五'],
    'age': [25, 30, 35],
    'city': ['北京', '上海', '广州']
})

# 读取数据
df = pd.read_csv('data.csv')
df = pd.read_excel('data.xlsx')
df = pd.read_json('data.json')

# 查看数据
df.head()        # 前几行
df.tail()        # 后几行
df.shape         # 形状
df.info()        # 信息
df.describe()   # 统计

# 选择
df['name']           # 列
df[['name', 'age']]  # 多列
df.loc[0]            # 行
df.iloc[0:3]         # 切片

# 筛选
df[df['age'] > 25]

# 排序
df.sort_values('age')
df.sort_index()

# 分组
df.groupby('city').mean()

# 缺失值
df.isnull()
df.dropna()
df.fillna(0)

# 保存
df.to_csv('output.csv')
df.to_excel('output.xlsx')
```

## Matplotlib

```python
import matplotlib.pyplot as plt

# 折线图
plt.plot([1, 2, 3], [4, 5, 6])
plt.show()

# 柱状图
plt.bar(['A', 'B', 'C'], [10, 20, 30])
plt.show()

# 散点图
plt.scatter([1, 2, 3], [4, 5, 6])
plt.show()

# 设置
plt.title('标题')
plt.xlabel('X轴')
plt.ylabel('Y轴')
plt.legend()
plt.grid()
plt.show()
```

## 安装数据分析库

```bash
pip install numpy pandas matplotlib seaborn scikit-learn
```