---
title: Java 基础语法
icon: java
order: 2
---

# Java 基础语法

## 数据类型

### 基本数据类型

| 类型 | 大小 | 范围 |
|------|------|------|
| byte | 1 字节 | -128 ~ 127 |
| short | 2 字节 | -32768 ~ 32767 |
| int | 4 字节 | -21亿 ~ 21亿 |
| long | 8 字节 | 很大 |
| float | 4 字节 | 浮点数 |
| double | 8 字节 | 双精度浮点数 |
| char | 2 字节 | 0 ~ 65535 |
| boolean | 1 位 | true/false |

```java
// 整数
byte b = 100;
short s = 1000;
int i = 100000;
long l = 100000L;  // 需要 L 后缀

// 浮点数
float f = 3.14f;   // 需要 f 后缀
double d = 3.14;

// 字符
char c = 'A';
char c2 = '\u0041'; // Unicode

// 布尔
boolean flag = true;
boolean flag2 = false;
```

### 引用类型

```java
String str = "Hello";
Integer num = 100;
Double price = 19.99;
```

## 数组

```java
// 一维数组
int[] arr = new int[5];
int[] arr2 = {1, 2, 3, 4, 5};
String[] names = new String[]{"张三", "李四"};

// 二维数组
int[][] matrix = new int[3][3];
int[][] matrix2 = {{1,2,3}, {4,5,6}, {7,8,9}};

// 遍历
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

for (int num : arr) {
    System.out.println(num);
}
```

## 字符串

```java
String s1 = "Hello";
String s2 = new String("Hello");

// 常用方法
s1.length();           // 长度
s1.charAt(0);          // 字符
s1.substring(0, 5);    //  substring
s1.toUpperCase();      // 大写
s1.toLowerCase();      // 小写
s1.trim();             // 去除空格
s1.split(",");         // 分割
s1.replace("a", "b");  // 替换
s1.contains("ell");    // 包含
s1.equals(s2);         // 比较
s1.isEmpty();          // 是否为空

// StringBuilder
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" World");
String result = sb.toString();
```

## 方法

```java
// 普通方法
public int add(int a, int b) {
    return a + b;
}

// 静态方法
public static int max(int a, int b) {
    return a > b ? a : b;
}

// 重载
public int add(int a, int b) { return a + b; }
public double add(double a, double b) { return a + b; }
public int add(int a, int b, int c) { return a + b + c; }

// 可变参数
public int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) {
        total += n;
    }
    return total;
}
```

## 访问修饰符

| 修饰符 | 同类 | 同包 | 子类 | 其他 |
|--------|------|------|------|------|
| public | ✓ | ✓ | ✓ | ✓ |
| protected | ✓ | ✓ | ✓ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| private | ✓ | ✗ | ✗ | ✗ |

## 包

```java
package com.example.demo;  // 声明包

import java.util.ArrayList;  // 导入包
import java.util.List;
```