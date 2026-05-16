---
title: Java 并发
icon: java
order: 6
---

# Java 并发

Java 并发重点是线程安全、任务调度、共享状态控制和线程池使用。

## 创建线程

```java
Thread thread = new Thread(() -> {
    System.out.println("运行任务");
});
thread.start();
```

实际项目中通常不直接频繁创建线程，而是使用线程池。

## 线程池

```java
ExecutorService executor = Executors.newFixedThreadPool(4);

try {
    Future<String> future = executor.submit(() -> "结果");
    String result = future.get();
    System.out.println(result);
} finally {
    executor.shutdown();
}
```

建议在服务端项目中显式配置线程池参数，避免无界队列或过多线程带来风险。

## synchronized

```java
public class Counter {
    private int value;

    public synchronized void increment() {
        value++;
    }

    public synchronized int getValue() {
        return value;
    }
}
```

`synchronized` 可以保证同一时刻只有一个线程进入临界区。

## volatile

```java
private volatile boolean running = true;
```

`volatile` 保证可见性，但不保证复合操作的原子性。`count++` 这种操作仍然需要锁或原子类。

## 原子类

```java
AtomicInteger count = new AtomicInteger(0);

count.incrementAndGet();
```

原子类适合简单计数、状态标记等场景。

## CompletableFuture

```java
CompletableFuture<String> future = CompletableFuture
        .supplyAsync(() -> "用户")
        .thenApply(name -> "你好，" + name);

String result = future.join();
```

`CompletableFuture` 适合组织异步任务编排，但要注意异常处理和线程池选择。

## 常见问题

- 共享可变对象没有保护，容易出现竞态条件。
- 线程池没有关闭，会导致程序无法退出。
- 在锁内执行慢 IO，会降低并发能力。
- 使用 `parallelStream` 前要确认任务真的适合并行。
