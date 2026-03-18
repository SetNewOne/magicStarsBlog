---
title: 模块化编程
icon: js
order: 9
---

# 模块化编程

模块化将代码拆分成独立、可复用的文件。

## 导出/导入

### 命名导出

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const PI = 3.14159;

// 导入
import { add, subtract, PI } from './math.js';
import { add as addNum } from './math.js'; // 重命名
import * as math from './math.js'; // 全部导入
```

### 默认导出

```javascript
// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// 导入
import User from './user.js';
import MyUser from './user.js'; // 可以任意命名
```

### 混合导出

```javascript
// util.js
export default function helper() { }
export const format = () => { };
export const parse = () => { };

// 导入
import helper, { format, parse } from './util.js';
```

## CommonJS vs ES Modules

### CommonJS（Node.js 传统）

```javascript
// 导出
module.exports = { add, subtract };
// 或
exports.add = add;

// 导入
const { add } = require('./math.js');
```

### ES Modules（现代）

```javascript
// 导出
export const add = (a, b) => a + b;

// 导入
import { add } from './math.js';
```

## 动态导入

```javascript
// 按需加载模块
button.addEventListener('click', async () => {
    const { formatDate } = await import('./utils.js');
    console.log(formatDate(new Date()));
});
```

## 模块实践

### 工具模块

```javascript
// utils/format.js
export function formatCurrency(amount) {
    return new Intl.NumberFormat('zh-CN', {
        style: 'currency',
        currency: 'CNY'
    }).format(amount);
}

export function formatDate(date) {
    return new Intl.DateTimeFormat('zh-CN').format(date);
}

// utils/validate.js
export function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
}
```

### API 模块

```javascript
// api/index.js
const BASE_URL = '/api';

async function request(endpoint, options = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: { 'Content-Type': 'application/json' },
        ...options
    });
    return response.json();
}

export const userApi = {
    getUser: (id) => request(`/users/${id}`),
    updateUser: (id, data) => request(`/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
};

export const postApi = {
    getPosts: () => request('/posts'),
    getPost: (id) => request(`/posts/${id}`)
};
```

### 组件模块

```javascript
// components/Modal.js
export class Modal {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    
    open() {
        // 创建并显示模态框
    }
    
    close() {
        // 关闭模态框
    }
}

// 使用
import { Modal } from './components/Modal.js';
const modal = new Modal('提示', '操作成功');
modal.open();
```