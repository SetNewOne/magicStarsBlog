---
title: 事件处理
icon: js
order: 6
---

# 事件处理

事件是用户与页面交互时产生的动作，如点击、输入、滚动等。

## 事件基础

### 事件监听

```javascript
const btn = document.querySelector('#btn');

// addEventListener 方法
btn.addEventListener('click', function(event) {
    console.log('点击了！');
});

// 箭头函数
btn.addEventListener('click', (e) => {
    console.log(e.target);
});

// 移除事件监听
function handler() {
    console.log('点击！');
}
btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);
```

### 事件流

```
捕获阶段 → 目标阶段 → 冒泡阶段
```

```javascript
// 捕获阶段（从外到内）
element.addEventListener('click', handler, true);

// 冒泡阶段（从内到外，默认）
element.addEventListener('click', handler, false);
```

### 事件对象

```javascript
element.addEventListener('click', (e) => {
    e.type          // 事件类型
    e.target        // 触发事件的元素
    e.currentTarget // 绑定事件的元素
    e.preventDefault()  // 阻止默认行为
    e.stopPropagation() // 阻止冒泡
    e.stopImmediatePropagation() // 阻止后续监听器
});
```

## 常见事件

### 鼠标事件

```javascript
element.addEventListener('click', (e) => { });      // 点击
element.addEventListener('dblclick', (e) => { });   // 双击
element.addEventListener('mousedown', (e) => { });  // 按下
element.addEventListener('mouseup', (e) => { });    // 抬起
element.addEventListener('mouseover', (e) => { });  // 进入
element.addEventListener('mouseout', (e) => { });   // 离开
element.addEventListener('mousemove', (e) => { });  // 移动

// 鼠标位置
e.clientX  // 相对于视口 X
e.clientY  // 相对于视口 Y
e.pageX    // 相对于页面 X
e.pageY    // 相对于页面 Y
e.offsetX  // 相对于元素 X
e.offsetY  // 相对于元素 Y
```

### 键盘事件

```javascript
document.addEventListener('keydown', (e) => { });   // 按下
document.addEventListener('keyup', (e) => { });     // 抬起
document.addEventListener('keypress', (e) => { });  // 字符键

// 键码
e.key        // 'a', 'Enter', 'ArrowUp'
e.code       // 'KeyA', 'Enter', 'ArrowUp'
e.keyCode    // 65, 13, 38（已废弃）
e.ctrlKey    // Ctrl 是否按下
e.shiftKey   // Shift 是否按下
e.altKey     // Alt 是否按下
```

### 表单事件

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // 阻止提交
});

input.addEventListener('focus', (e) => { });    // 获取焦点
input.addEventListener('blur', (e) => { });     // 失去焦点
input.addEventListener('input', (e) => { });    // 输入时
input.addEventListener('change', (e) => { });   // 改变时
input.addEventListener('select', (e) => { });   // 选中文本
```

### 窗口事件

```javascript
window.addEventListener('load', () => { });      // 加载完成
window.addEventListener('resize', () => { });    // 调整大小
window.addEventListener('scroll', () => { });    // 滚动
window.addEventListener('beforeunload', (e) => { // 离开前
    e.returnValue = ''; // 提示用户是否离开
});
```

## 事件委托

```javascript
// 不推荐：为每个子元素绑定事件
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', handleClick);
});

// 推荐：事件委托到父元素
document.querySelector('.list').addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        handleClick(e);
    }
});
```

## 常见应用

### 防抖

```javascript
function debounce(fn, delay = 300) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const handleSearch = debounce((e) => {
    console.log('搜索:', e.target.value);
}, 500);

input.addEventListener('input', handleSearch);
```

### 节流

```javascript
function throttle(fn, delay = 300) {
    let last = 0;
    return function(...args) {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn.apply(this, args);
        }
    };
}

const handleScroll = throttle(() => {
    console.log('滚动位置:', window.scrollY);
}, 200);

window.addEventListener('scroll', handleScroll);
```