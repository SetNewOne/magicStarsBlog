---
title: JavaScript 进阶
icon: js
order: 8
---

# JavaScript 进阶

JavaScript 进阶学习要理解运行机制、作用域、对象模型、异步流程和常见工程实践。

## 作用域和闭包

闭包指函数可以访问它定义时所在作用域中的变量。

```javascript
function createCounter() {
    let count = 0;

    return function increment() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

闭包常用于封装私有状态、函数工厂和事件回调。

## this 绑定

`this` 的值取决于函数调用方式，箭头函数没有自己的 `this`。

```javascript
const user = {
    name: "张三",
    say() {
        console.log(this.name);
    },
};

user.say(); // 张三

const say = user.say;
say(); // 严格模式下 this 为 undefined
```

常见规则：

- 对象方法调用：`this` 指向调用者。
- 普通函数调用：严格模式下 `this` 是 `undefined`。
- `new` 调用：`this` 指向新对象。
- `call`、`apply`、`bind` 可以显式指定 `this`。
- 箭头函数继承外层作用域的 `this`。

## 原型和继承

JavaScript 对象通过原型链查找属性。

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.say = function () {
    return `你好，我是${this.name}`;
};

const p = new Person("李四");
p.say();
```

现代代码更常用 `class` 语法，但底层仍然基于原型。

```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    say() {
        return `你好，我是${this.name}`;
    }
}
```

## 事件循环

JavaScript 主线程一次只执行一个任务。同步代码先执行，微任务通常早于下一轮宏任务执行。

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// 输出顺序：A D C B
```

理解事件循环有助于排查异步顺序、页面卡顿和接口竞态。

## Promise 错误处理

```javascript
async function loadUser(id) {
    try {
        const response = await fetch(`/api/users/${id}`);

        if (!response.ok) {
            throw new Error(`请求失败：${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
```

建议：

- `await` 网络请求时检查 `response.ok`。
- 不要吞掉错误，无法处理时继续抛出。
- 并发请求使用 `Promise.all`，允许部分失败时使用 `Promise.allSettled`。

## 模块设计

```javascript
// user-service.js
export async function getUser(id) {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
}

// page.js
import { getUser } from "./user-service.js";
```

好的模块通常职责单一，导出稳定，避免在导入时直接执行复杂副作用。

## 常见小技巧

```javascript
// 安全读取嵌套属性
const city = user.profile?.address?.city ?? "未知";

// 数组去重
const unique = [...new Set(items)];

// 对象浅拷贝
const nextUser = { ...user, name: "王五" };

// 过滤空值
const visible = list.filter(Boolean);

// 格式化日期
const dateText = new Intl.DateTimeFormat("zh-CN").format(new Date());
```

## 排错清单

1. 异步函数是否忘记 `await`。
2. 事件监听是否重复绑定。
3. 状态对象是否被直接修改导致更新失效。
4. 数组方法是否改变了原数组，例如 `sort()`、`splice()`。
5. 网络请求是否处理了失败状态和超时场景。
