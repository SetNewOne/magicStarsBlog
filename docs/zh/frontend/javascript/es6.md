---
title: ES6+ 新特性
icon: js
order: 7
---

# ES6+ 新特性

ES6（ECMAScript 2015）引入了许多重要的新特性，之后的 ES7、ES8 等版本又不断增加新功能。

## let 和 const

```javascript
// let - 块级作用域
if (true) {
    let x = 1;
}
// console.log(x); // ReferenceError

// const - 常量
const PI = 3.14159;
// PI = 3; // TypeError

// const 对象
const obj = { name: 'Tom' };
obj.name = 'Jerry'; // OK
```

## 箭头函数

```javascript
// 完整写法
const add = (a, b) => {
    return a + b;
};

// 简写（隐式返回）
const add = (a, b) => a + b;

// 单参数可以省略括号
const double = x => x * 2;

// 返回对象需要括号
const getUser = () => ({ name: 'Tom', age: 20 });

// 特点：不绑定 this
function Timer() {
    this.time = 0;
    setInterval(() => {
        this.time++; // this 指向 Timer 实例
    }, 1000);
}
```

## 模板字符串

```javascript
const name = 'Tom';
const age = 20;

// 字符串插值
const message = `你好，我叫${name}，今年${age}岁`;

// 多行字符串
const html = `
<div>
    <h1>标题</h1>
    <p>内容</p>
</div>
`;

// 标签模板
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => {
        return acc + str + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}
const result = highlight`我的名字是${name}，今年${age}岁`;
```

## 解构赋值

### 数组解构

```javascript
const [a, b, c] = [1, 2, 3];
const [first, ...rest] = [1, 2, 3, 4];
const [,, third] = [1, 2, 3]; // 跳过元素
const [a = 1] = []; // 默认值
```

### 对象解构

```javascript
const { name, age } = { name: 'Tom', age: 20 };
const { name: userName } = { name: 'Tom' }; // 重命名
const { name, ...rest } = { name: 'Tom', age: 20, city: 'Beijing' };
const { name = '匿名' } = {}; // 默认值
```

### 函数参数解构

```javascript
function printUser({ name, age }) {
    console.log(name, age);
}
printUser({ name: 'Tom', age: 20 });

function sum([a, b, c]) {
    return a + b + c;
}
sum([1, 2, 3]);
```

## 扩展运算符

```javascript
// 数组展开
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]

// 对象展开
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // {a:1,b:2,c:3}

// 剩余参数
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

## Promise

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('成功');
        } else {
            reject('失败');
        }
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('完成'));
```

## async/await

```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('错误:', error);
    }
}
```

## 类

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} 发出了声音`);
    }
    
    static create(name) {
        return new Animal(name);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} 汪汪叫`);
    }
}

const dog = new Dog('旺财', '金毛');
dog.speak();
```

## 模块化

```javascript
// 导出
export const name = 'Tom';
export function hello() { }
export default class { }

// 导入
import { name, hello } from './module.js';
import MyClass from './module.js';
```

## 其他常用特性

```javascript
// Optional Chaining（可选链）
const user = { profile: { name: 'Tom' } };
const city = user?.profile?.city ?? '未知';

// Nullish 合并
const value = null ?? 'default';

// BigInt
const bigNumber = 9007199254740991n;

// Symbol
const sym = Symbol('description');

// Array.includes
[1, 2, 3].includes(2); // true

// Object.entries / Object.values
Object.entries({ a: 1, b: 2 }); // [['a',1],['b',2]]
Object.values({ a: 1, b: 2 }); // [1, 2]

// padStart / padEnd
'5'.padStart(2, '0'); // '05'
'hello'.padEnd(10, '.'); // 'hello.....'
```

## 常用数组方法

```javascript
const arr = [1, 2, 3, 4, 5];

// map - 映射
arr.map(x => x * 2); // [2,4,6,8,10]

// filter - 过滤
arr.filter(x => x > 3); // [4,5]

// reduce - 聚合
arr.reduce((sum, x) => sum + x, 0); // 15

// find - 查找
arr.find(x => x > 3); // 4

// findIndex - 查找索引
arr.findIndex(x => x > 3); // 3

// some - 是否存在
arr.some(x => x > 4); // true

// every - 全部满足
arr.every(x => x > 0); // true

// flat - 扁平化
[[1,2], [3,4]].flat(); // [1,2,3,4]
```