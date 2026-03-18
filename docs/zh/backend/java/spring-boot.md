---
title: Spring Boot 入门
icon: spring
order: 5
---

# Spring Boot 入门

Spring Boot 是 Spring 生态的快速开发框架，简化了 Spring 应用的配置。

## 快速开始

### 创建项目

```bash
# 使用 Spring Initializr
# https://start.spring.io/

# 或使用 IDEA/New -> Project -> Spring Initializr
```

### 依赖选择

- Spring Web（Web 开发）
- Spring Data JPA（数据库操作）
- MySQL Driver（MySQL 驱动）
- Lombok（简化代码）
- Spring Boot DevTools（热重载）

### 项目结构

```
src/
├── main/
│   ├── java/
│   │   └── com/example/demo/
│   │       ├── DemoApplication.java
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       └── model/
│   └── resources/
│       ├── application.yml
│       ├── static/
│       └── templates/
└── test/
```

### 启动类

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

## 配置文件

### application.yml

```yaml
server:
  port: 8080
  servlet:
    context-path: /api

spring:
  application:
    name: myapp
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: root
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true

logging:
  level:
    com.example: debug
```

## REST API

### Controller

```java
@RestController
@RequestMapping("/users")
public class UserController {
    
    @GetMapping
    public List<User> getAll() {
        return userService.findAll();
    }
    
    @GetMapping("/{id}")
    public User getById(@PathVariable Long id) {
        return userService.findById(id);
    }
    
    @PostMapping
    public User create(@RequestBody User user) {
        return userService.save(user);
    }
    
    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return userService.save(user);
    }
    
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        userService.delete(id);
    }
}
```

### Service

```java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("用户不存在"));
    }
    
    public User save(User user) {
        return userRepository.save(user);
    }
    
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
    
    public List<User> findByName(String name) {
        return userRepository.findByName(name);
    }
}
```

### Repository

```java
public interface UserRepository extends JpaRepository<User, Long> {
    
    List<User> findByName(String name);
    
    @Query("SELECT u FROM User u WHERE u.email = ?1")
    User findByEmail(String email);
    
    List<User> findByAgeGreaterThanEqual(Integer age);
}
```

## 常用注解

```java
@Controller       // 控制器
@RestController   // REST 控制器（返回 JSON）
@RequestMapping  // 请求映射
@GetMapping      // GET 请求
@PostMapping     // POST 请求
@PutMapping      // PUT 请求
@DeleteMapping   // DELETE 请求

@Service         // 服务层
@Repository      // 数据访问层
@Component       // 组件

@Autowired       // 依赖注入
@Qualifier       // 指定 Bean 名称
@Value           // 配置属性

@Configuration   // 配置类
@Bean            // Bean 定义
@ConfigurationProperties // 属性绑定

@Entity          // 实体类
@Table           // 表映射
@Id              // 主键
@GeneratedValue  // 主键生成策略

@Transactional   // 事务
```

## 常用依赖

```xml
<dependencies>
    <!-- Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <!-- MySQL -->
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <!-- Lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    
    <!-- Validation -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
</dependencies>
```