---
title: JavaScript 入门
icon: js
order: 3
---

# JavaScript 入门

JavaScript 是 Web 开发的编程语言，可以实现网页的交互效果。

## 什么是 JavaScript？

JavaScript 是一种脚本语言，可以在浏览器中运行，也可以用于服务器端开发（Node.js）。

```html
<!DOCTYPE html>
<html>
<head>
    <title>JS 入门</title>
</head>
<body>
    <h1 id="title">Hello</h1>
    <button onclick="changeTitle()">点击我</button>
    
    <script>
        function changeTitle() {
            document.getElementById('title').textContent = '你好世界！';
        }
    </script>
</body>
</html>
```

## JavaScript 引入方式

### 1. 行内脚本

```html
<button onclick="alert('你好！')">点击</button>
```

### 2. 内部脚本

```html
<script>
    console.log('Hello');
</script>
```

### 3. 外部脚本（推荐）

```html
<script src="main.js"></script>
```

## 基础语法

### 变量声明

```javascript
// ES6+ 推荐
let name = '张三';
const age = 25;

// 不推荐（变量提升）
var address = '北京';
```

### 数据类型

```javascript
// 原始类型
let str = '字符串';
let num = 123;
let bool = true;
let und = undefined;
let n = null;

// 引用类型
let arr = [1, 2, 3];
let obj = { name: '张三', age: 25 };
let func = function() { };
```

### 运算符

```javascript
// 算术
+ - * / % **

// 比较
== != === !== > < >= <=

// 逻辑
&& || !

// 赋值
= += -= *= /= %=
```

### 流程控制

```javascript
// 条件
if (condition) { }
else if (condition) { }
else { }

// 三元
let result = age >= 18 ? '成年' : '未成年';

// switch
switch(value) {
    case 1: break;
    default: break;
}

// 循环
for (let i = 0; i < 10; i++) { }
while (condition) { }
do { } while (condition)

// for...of（数组）
for (const item of array) { }

// for...in（对象）
for (const key in object) { }
```

### 函数

```javascript
// 函数声明
function greet(name) {
    return `你好，${name}`;
}

// 函数表达式
const greet = function(name) {
    return `你好，${name}`;
};

// 箭头函数
const greet = (name) => `你好，${name}`;
const greet = (name) => {
    return `你好，${name}`;
};

// 默认参数
function greet(name = '朋友') {
    return `你好，${name}`;
}

// 剩余参数
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

## DOM 操作

```javascript
// 获取元素
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('.class');

// 修改内容
element.textContent = '新文本';
element.innerHTML = '<span>HTML</span>';

// 修改样式
element.style.color = 'red';
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');

// 创建元素
const div = document.createElement('div');
div.textContent = '新元素';
document.body.appendChild(div);
```

## 事件处理

```javascript
// 添加事件
element.addEventListener('click', function(event) {
    console.log('点击了');
});

// 箭头函数
element.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});

// 常见事件
click, dblclick, mouseenter, mouseleave
keydown, keyup, keypress
submit, change, input
load, resize, scroll
```

## 异步编程

```javascript
// 回调函数
function fetchData(callback) {
    setTimeout(() => {
        callback('数据');
    }, 1000);
}

// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('数据'), 1000);
});

// async/await
async function getData() {
    const result = await promise;
    return result;
}
```

## 模块化

```javascript
// 导出
export const name = '张三';
export function greet() { }
export default { }

// 导入
import { name, greet } from './module.js';
import myModule from './module.js';
```

## 推荐资源

- [MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [JavaScript.info](https://zh.javascript.info/)
- [ES6 入门教程](https://es6.ruanyifeng.com/)