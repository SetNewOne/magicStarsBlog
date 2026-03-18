---
title: 异步编程
icon: js
order: 8
---

# 异步编程

JavaScript 是单线程语言，通过异步编程实现非阻塞操作。

## 回调函数

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'Tom' };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});
```

## Promise

### 创建 Promise

```javascript
// 成功
const promise1 = Promise.resolve('成功');
// 失败
const promise2 = Promise.reject(new Error('失败'));
// 创建新的
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('数据');
    }, 1000);
});
```

### Promise 状态

```
pending（进行中）→ fulfilled（已成功）
              ↘
              → rejected（已失败）
```

### 实例方法

```javascript
promise
    .then(onFulfilled)   // 成功回调
    .catch(onRejected)   // 失败回调
    .finally(onFinally); // 完成回调

// 链式调用
fetch('/api/user')
    .then(res => res.json())
    .then(user => user.name)
    .then(name => console.log(name))
    .catch(err => console.error(err));
```

### 静态方法

```javascript
// 并行执行
Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, result3]) => { });

// 任意一个完成
Promise.race([promise1, promise2, promise3])
    .then(result => { });

// 所有settle（ES2020）
Promise.allSettled([promise1, promise2])
    .then(results => {
        results.forEach(({ status, value }) => { });
    });
```

## async/await

### 基本用法

```javascript
async function getData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('请求失败:', error);
    }
}
```

### 并行请求

```javascript
async function getData() {
    // 串行（一个接一个）
    const user = await fetch('/api/user').then(r => r.json());
    const posts = await fetch('/api/posts').then(r => r.json());

    // 并行（同时发起）
    const [userRes, postsRes] = await Promise.all([
        fetch('/api/user'),
        fetch('/api/posts')
    ]);
    const user = await userRes.json();
    const posts = await postsRes.json();
}
```

### 错误处理

```javascript
async function example() {
    // try-catch
    try {
        const data = await riskyOperation();
    } catch (err) {
        console.error(err);
    }

    // Promise.catch
    const data = await riskyOperation().catch(err => {
        console.error(err);
        return defaultValue;
    });
}
```

## 实际应用

### 封装 fetch

```javascript
async function request(url, options = {}) {
    const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        ...options
    });
    
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    
    return response.json();
}

// 使用
const users = await request('/api/users');
```

### 异步迭代

```javascript
async function processItems(items) {
    for await (const item of asyncIterator) {
        await process(item);
    }
}
```

### 延迟函数

```javascript
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function retry(fn, times = 3) {
    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === times - 1) throw err;
            await delay(1000 * (i + 1));
        }
    }
}
```