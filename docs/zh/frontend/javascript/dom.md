---
title: DOM 操作
icon: js
order: 5
---

# DOM 操作

DOM（Document Object Model）是文档对象模型，用于操作 HTML 和 XML 文档。

## 获取元素

### 基本获取

```javascript
// 通过 ID 获取（返回单个元素）
const header = document.getElementById('header');

// 通过类名获取（返回 HTMLCollection）
const buttons = document.getElementsByClassName('btn');

// 通过标签名获取（返回 HTMLCollection）
const paragraphs = document.getElementsByTagName('p');

// 通过 name 属性获取（返回 NodeList）
const radios = document.getElementsByName('choice');
```

### CSS 选择器

```javascript
// 返回第一个匹配的元素
const container = document.querySelector('.container');
const firstBtn = document.querySelector('button');

// 返回所有匹配的元素（NodeList）
const allBtns = document.querySelectorAll('.btn');
const listItems = document.querySelectorAll('ul > li');

// 伪类选择器
const firstCard = document.querySelector('.card:first-child');
const evenItems = document.querySelectorAll('li:nth-child(even)');
```

### 获取 body 和 html

```javascript
document.body     // <body> 元素
document.documentElement // <html> 元素
document.head     // <head> 元素
```

## 修改元素

### 修改内容

```javascript
const el = document.getElementById('demo');

// 纯文本（安全，防止 XSS）
el.textContent = '新文本';
el.textContent = '<b>不会被解析为 HTML</b>';

// HTML（会解析标签）
el.innerHTML = '<b>这是粗体</b>';
```

### 修改属性

```javascript
const link = document.querySelector('a');

// 获取属性
link.getAttribute('href');
link.href;  // 也可以直接访问

// 设置属性
link.setAttribute('href', 'https://example.com');
link.href = 'https://example.com';

// 移除属性
link.removeAttribute('target');

// 检查属性
link.hasAttribute('target'); // true/false
```

### 修改样式

```javascript
const box = document.querySelector('.box');

// 直接修改 style（驼峰命名）
box.style.color = 'red';
box.style.backgroundColor = '#f0f0f0';
box.style.display = 'none';
box.style.fontSize = '18px';

// 读取 style
box.style.color;

// 添加/移除类
box.classList.add('active');
box.classList.remove('hidden');
box.classList.toggle('active');

// 检查类
box.classList.contains('active'); // true/false
```

### 修改 CSS 变量

```javascript
document.documentElement.style.setProperty('--primary-color', '#2196f3');
```

## 创建和删除元素

### 创建元素

```javascript
// 创建新元素
const newDiv = document.createElement('div');
newDiv.id = 'new-div';
newDiv.className = 'container';
newDiv.textContent = '新元素';

// 添加到 DOM
document.body.appendChild(newDiv);

// 插入到指定位置
const parent = document.querySelector('.list');
const newItem = document.createElement('li');
newItem.textContent = '新项目';

// 开头插入
parent.insertBefore(newItem, parent.firstChild);

// append - 末尾添加多个
parent.append(newItem, document.createElement('li'));

// prepend - 开头添加多个
parent.prepend(newItem);

// after - 之后添加
parent.after(newItem);

// before - 之前添加
parent.before(newItem);
```

### 删除元素

```javascript
const el = document.querySelector('.to-remove');

// 现代方法
el.remove();

// 旧方法（兼容）
el.parentNode.removeChild(el);
```

### 克隆元素

```javascript
const original = document.querySelector('.card');
const clone = original.cloneNode(true); // true 包含子元素
document.body.appendChild(clone);
```

### 替换元素

```javascript
const oldEl = document.querySelector('.old');
const newEl = document.createElement('div');
newEl.textContent = '新元素';

oldEl.parentNode.replaceChild(newEl, oldEl);
```

## 元素信息

### 获取元素信息

```javascript
const el = document.querySelector('.box');

// 尺寸和位置
el.offsetWidth;   // 包含边框的宽度
el.offsetHeight;  // 包含边框的高度
el.offsetLeft;    // 相对于 offsetParent 的左偏移
el.offsetTop;     // 相对于 offsetParent 的上偏移
el.offsetParent;  // 定位父元素

el.clientWidth;   // 不包含边框的宽度
el.clientHeight;  // 不包含边框的高度
el.clientLeft;    // 左边框宽度
el.clientTop;     // 上边框宽度

el.getBoundingClientRect(); // { top, right, bottom, left, width, height }

// 滚动
el.scrollWidth;   // 滚动宽度
el.scrollHeight;  // 滚动高度
el.scrollTop;     // 垂直滚动位置
el.scrollLeft;    // 水平滚动位置
```

### 检查元素

```javascript
el.tagName;       // 'DIV'（大写）
el.id;            // 元素 ID
el.className;     // 类名（字符串）
el.classList;     // 类名列表

// 父元素
el.parentNode;    // 父节点
el.parentElement; // 父元素（不是元素返回 null）

// 子元素
el.children;      // 子元素集合
el.childNodes;    // 子节点（包括文本节点）
el.firstChild;    // 第一个子节点
el.lastChild;     // 最后一个子节点
el.firstElementChild; // 第一个子元素
el.lastElementChild;  // 最后一个子元素

// 兄弟元素
el.nextSibling;       // 下一个兄弟节点
el.previousSibling;   // 上一个兄弟节点
el.nextElementSibling;    // 下一个兄弟元素
el.previousElementSibling; // 上一个兄弟元素
```

## 实战示例

### 动态创建列表

```javascript
const data = ['苹果', '香蕉', '橙子'];
const ul = document.createElement('ul');

data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

document.body.appendChild(ul);
```

### 表格动态添加行

```javascript
function addRow(data) {
    const tbody = document.querySelector('#table tbody');
    const tr = document.createElement('tr');
    
    data.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
}

addRow(['张三', '25', '北京']);
```

### 模态框

```javascript
function showModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${title}</h2>
            <p>${content}</p>
            <button class="close">关闭</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
    });
}

showModal('提示', '操作成功！');
```