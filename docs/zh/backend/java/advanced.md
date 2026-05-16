---
title: Java 进阶
icon: java
order: 5
---

# Java 进阶

Java 进阶学习应关注类型系统、异常处理、泛型、IO、日期时间和常见工程实践。

## 泛型

泛型让集合和方法在编译期获得类型检查。

```java
List<String> names = new ArrayList<>();
names.add("张三");

public static <T> T first(List<T> list) {
    if (list.isEmpty()) {
        return null;
    }
    return list.get(0);
}
```

常见通配符：

- `? extends Number`：可以读取为 `Number`，适合生产者。
- `? super Integer`：可以写入 `Integer`，适合消费者。

## 异常处理

```java
try {
    Files.readString(Path.of("config.txt"));
} catch (IOException e) {
    throw new IllegalStateException("读取配置失败", e);
}
```

建议：

- 不要空 `catch`。
- 保留原始异常作为 cause。
- 业务异常和系统异常分开表达。
- 能在边界层统一处理时，不要到处重复打印日志。

## try-with-resources

```java
try (BufferedReader reader = Files.newBufferedReader(Path.of("data.txt"))) {
    String line = reader.readLine();
    System.out.println(line);
} catch (IOException e) {
    throw new RuntimeException(e);
}
```

实现 `AutoCloseable` 的资源会自动关闭，适合文件、网络连接、数据库连接等。

## Stream

```java
List<String> names = users.stream()
        .filter(user -> user.isActive())
        .map(User::getName)
        .distinct()
        .sorted()
        .toList();
```

Stream 适合数据转换，不适合写大量有副作用的复杂业务流程。

## 日期时间

```java
LocalDate today = LocalDate.now();
LocalDate nextWeek = today.plusWeeks(1);

DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
String text = today.format(formatter);
```

新项目优先使用 `java.time` 包，不再优先使用旧的 `Date` 和 `Calendar`。

## 常见小技巧

```java
// 字符串判空
if (name != null && !name.isBlank()) {
    System.out.println(name);
}

// 避免 NullPointerException
String city = Optional.ofNullable(user)
        .map(User::getAddress)
        .map(Address::getCity)
        .orElse("未知");

// 不可变列表
List<String> roles = List.of("admin", "user");
```
