---
title: JavaScript 基础语法
icon: js
order: 4
---

# JavaScript 基础语法

## 变量

### let 和 const

```javascript
// let - 可重新赋值的变量
let name = '张三';
name = '李四'; // OK

// const - 常量，不可重新赋值
const PI = 3.14159;
// PI = 3.14; // 错误

// const 对象可以修改属性
const user = { name: '张三' };
user.name = '李四'; // OK
// user = {}; // 错误
```

### var（了解即可）

```javascript
// var 有变量提升
console.log(a); // undefined（不是错误）
var a = 1;

// var 没有块级作用域
if (true) {
    var b = 2;
}
console.log(b); // 2

// let 有块级作用域
if (true) {
    let c = 3;
}
// console.log(c); // 错误
```

## 数据类型

### 原始类型

```javascript
// 字符串
let str = 'Hello';
let str2 = "World";
let str3 = `Hello ${str2}`; // 模板字符串

// 数字
let num = 42;
let float = 3.14;
let nan = NaN;
let infinity = Infinity;

// 布尔
let bool = true;
let bool2 = false;

// undefined
let und;
let und2 = undefined;

// null
let n = null;

// Symbol（ES6）
let sym = Symbol('desc');

// BigInt（ES2020）
let big = 9007199254740991n;
```

### 类型判断

```javascript
typeof 'hello'        // 'string'
typeof 123            // 'number'
typeof true           // 'boolean'
typeof undefined      // 'undefined'
typeof Symbol()       // 'symbol'
typeof BigInt(1)      // 'bigint'
typeof {}             // 'object'
typeof []             // 'object'
typeof null           // 'object'（历史遗留问题）
typeof function(){}   // 'function'
```

### 类型转换

```javascript
// 转字符串
String(123)       // '123'
(123).toString()  // '123'
123 + ''          // '123'

// 转数字
Number('123')     // 123
parseInt('123')   // 123
parseFloat('3.14')// 3.14
+'123'            // 123

// 转布尔
Boolean(1)        // true
Boolean(0)        // false
Boolean(' ')      // true
Boolean('')       // false
!!value           // 双非转换为布尔
```

## 运算符

### 算术运算符

```javascript
// 基本
10 + 5    // 15
10 - 5    // 5
10 * 5    // 50
10 / 5    // 2
10 % 3    // 1（余数）
10 ** 2   // 100（幂）

// 自增自减
let a = 5;
a++       // 后增：先返回值再增
++a       // 前增：先增再返回值
a--       // 后减
--a       // 前减
```

### 比较运算符

```javascript
// 值比较
5 == '5'    // true（会自动转换类型）
5 === '5'   // false（严格比较）

// 特殊比较
NaN === NaN // false（NaN 不等于任何值）
Object.is(NaN, NaN) // true

// 数值比较
3 > 2       // true
3 >= 3      // true
2 < 3       // true
```

### 逻辑运算符

```javascript
// 与或非
true && false  // false
true || false  // true
!true          // false

// 短路求值
true && console.log('执行')  // 执行
false && console.log('不执行') // 不执行

// ?? 运算符（空值合并）
null ?? 'default'  // 'default'
undefined ?? 'default' // 'default'
0 ?? 'default'     // 0（非空值）
```

### 条件运算符

```javascript
let age = 20;
let status = age >= 18 ? '成年' : '未成年';
```

## 流程控制

### if...else

```javascript
if (condition1) {
    // 条件1为true
} else if (condition2) {
    // 条件2为true
} else {
    // 都不满足
}
```

### switch

```javascript
let day = new Date().getDay();

switch (day) {
    case 0:
        console.log('周日');
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('工作日');
        break;
    case 6:
        console.log('周六');
        break;
    default:
        console.log('未知');
}
```

### 三元运算符

```javascript
let score = 85;
let grade = score >= 60 ? '及格' : '不及格';
```

### 循环

```javascript
// for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do...while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// for...of（遍历数组）
const arr = [1, 2, 3];
for (const item of arr) {
    console.log(item);
}

// for...in（遍历对象）
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]);
}
```

### break 和 continue

```javascript
// break 跳出循环
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0,1,2,3,4
}

// continue 跳过本次循环
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0,1,3,4
}
```