---
title: 面向对象编程
icon: java
order: 3
---

# 面向对象编程

OOP（Object-Oriented Programming）是一种编程范式。

## 封装

```java
public class Person {
    // 私有属性
    private String name;
    private int age;
    
    // 构造方法
    public Person() {}
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // 公有方法
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        }
    }
}
```

## 继承

```java
// 父类
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + "正在吃饭");
    }
}

// 子类
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }
    
    // 重写父类方法
    @Override
    public void eat() {
        System.out.println(name + "正在吃狗粮");
    }
    
    // 新方法
    public void bark() {
        System.out.println(name + "汪汪叫");
    }
}
```

## 多态

```java
public class PolymorphismDemo {
    public static void main(String[] args) {
        // 父类引用指向子类对象
        Animal animal = new Dog("旺财", "金毛");
        animal.eat();  // 调用 Dog 的 eat 方法
        
        // 方法参数多态
        feedAnimal(new Dog("旺财", "金毛"));
        feedAnimal(new Cat("咪咪"));
    }
    
    public static void feedAnimal(Animal animal) {
        animal.eat();
    }
}
```

## 抽象类

```java
public abstract class Shape {
    // 抽象方法
    public abstract double area();
    public abstract double perimeter();
    
    // 具体方法
    public void display() {
        System.out.println("这是一个图形");
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double perimeter() {
        return 2 * Math.PI * radius;
    }
}
```

## 接口

```java
public interface Flyable {
    void fly();
    
    // 默认方法（Java 8+）
    default void land() {
        System.out.println("降落");
    }
    
    // 静态方法
    static void check() {
        System.out.println("检查");
    }
}

public class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("鸟儿飞翔");
    }
}
```

## 内部类

```java
// 成员内部类
public class Outer {
    private int outerVar = 10;
    
    public class Inner {
        public void show() {
            System.out.println(outerVar);
        }
    }
}

// 静态内部类
public class Outer {
    public static class StaticInner {
    }
}

// 局部内部类
public void method() {
    class LocalClass {
    }
}

// 匿名内部类
Button btn = new Button("点击");
btn.setOnClickListener(new OnClickListener() {
    @Override
    public void onClick(View v) {
        System.out.println("点击了");
    }
});
```

## 设计原则

1. **单一职责** - 一个类只做一件事
2. **开闭原则** - 对扩展开放，对修改关闭
3. **里氏替换** - 子类可以替换父类
4. **依赖倒置** - 依赖抽象，不依赖具体
5. **接口隔离** - 使用多个小接口
6. **迪米特法则** - 最少知道原则