---
title: Java 入门
icon: java
order: 1
---

# Java 入门

Java 是一种广泛使用的面向对象编程语言，"一次编写，到处运行"。

## Java 特点

- **面向对象** - 一切皆对象
- **平台无关** - JVM 跨平台
- **自动内存管理** - 垃圾回收
- **多线程** - 内置支持
- **安全性** - 沙箱机制

## 开发环境

### 安装 JDK

```bash
# Windows - 下载安装包
# https://www.oracle.com/java/technologies/downloads/

# Linux (Ubuntu)
sudo apt install openjdk-17-jdk

# 验证安装
java -version
javac -version
```

### 环境变量

```bash
# Windows
# JAVA_HOME = C:\Program Files\Java\jdk-17
# PATH = %JAVA_HOME%\bin

# Linux
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
```

## 第一个程序

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 编译运行

```bash
# 编译
javac HelloWorld.java

# 运行
java HelloWorld
```

## 基础语法

### 变量和数据类型

```java
// 基本数据类型
int age = 25;
double height = 1.75;
boolean isStudent = true;
char grade = 'A';
String name = "张三";

// 引用类型
Integer num = 100;
Double price = 19.99;
```

### 运算符

```java
// 算术
int sum = 10 + 5;    // 15
int diff = 10 - 5;   // 5
int product = 10 * 5; // 50
int quotient = 10 / 5; // 2
int remainder = 10 % 3; // 1

// 自增自减
int a = 5;
a++;    // 后增
++a;    // 前增
a--;    // 后减
--a;    // 前减

// 比较
boolean equal = (a == b);
boolean notEqual = (a != b);
boolean greater = (a > b);
boolean less = (a < b);

// 逻辑
boolean result = (a > 0) && (b > 0);
boolean orResult = (a > 0) || (b > 0);
boolean notResult = !(a > 0);
```

### 流程控制

```java
// if-else
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}

// switch
switch (day) {
    case 1:
        System.out.println("周一");
        break;
    case 2:
        System.out.println("周二");
        break;
    default:
        System.out.println("其他");
}

// for 循环
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// while 循环
while (condition) {
    // 循环体
}

// do-while
do {
    // 循环体
} while (condition);
```

## 面向对象

### 类和对象

```java
public class Person {
    // 属性
    private String name;
    private int age;
    
    // 构造方法
    public Person() {}
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // 方法
    public void say() {
        System.out.println("你好，我是" + name);
    }
    
    // getter/setter
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}

// 使用
Person person = new Person("张三", 25);
person.say();
```

### 继承

```java
public class Student extends Person {
    private String school;
    
    public Student(String name, int age, String school) {
        super(name, age);
        this.school = school;
    }
    
    public void study() {
        System.out.println("学习...");
    }
}
```

### 接口

```java
public interface Drawable {
    void draw();
}

public class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("画圆");
    }
}
```

## 常用工具

- **IDE**: IntelliJ IDEA, Eclipse, VS Code
- **构建工具**: Maven, Gradle
- **版本控制**: Git