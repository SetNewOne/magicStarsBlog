---
title: CSS 盒模型
icon: css
order: 4
---

# CSS 盒模型

盒模型是 CSS 布局的基础概念。

## 盒模型组成

```
┌─────────────────────────┐
│      Margin (外边距)     │
│  ┌───────────────────┐  │
│  │   Border (边框)   │  │
│  │  ┌─────────────┐  │  │
│  │  │   Padding   │  │  │
│  │  │  (内边距)   │  │  │
│  │  │ ┌─────────┐ │  │  │
│  │  │ │ Content │ │  │  │
│  │  │ │ (内容)  │ │  │  │
│  │  │ └─────────┘ │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

## content-box（默认）

```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid #333;
    margin: 10px;
}
```

计算：
- 实际宽度 = 200 + 20*2 + 5*2 + 10*2 = **270px**
- 实际高度 = 100 + 20*2 + 5*2 + 10*2 = **170px**

## border-box（推荐）

```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid #333;
    margin: 10px;
    box-sizing: border-box;
}
```

计算：
- 内容宽度 = 200 - 20*2 - 5*2 = **150px**
- 内容高度 = 100 - 20*2 - 5*2 = **50px**

## 全局设置 border-box

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

## Margin（外边距）

```css
.box {
    /* 简写 */
    margin: 10px;           /* 上下左右 */
    margin: 10px 20px;      /* 上下，左右 */
    margin: 10px 20px 30px; /* 上，左右，下 */
    margin: 10px 20px 30px 40px; /* 上，右，下，左 */
    
    /* 单独设置 */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}
```

### Margin 合并

```css
/* 垂直外边距会合并 */
.box1 { margin-bottom: 20px; }
.box2 { margin-top: 30px; }
/* 实际间距 = 30px（取较大值） */
```

### 负值 margin

```css
.box {
    margin-left: -20px;     /* 向左移动 */
    margin-top: -10px;      /* 向上移动 */
}
```

## Padding（内边距）

```css
.box {
    /* 简写 */
    padding: 10px;
    padding: 10px 20px;
    padding: 10px 20px 30px;
    padding: 10px 20px 30px 40px;
    
    /* 单独设置 */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```

## Border（边框）

```css
.box {
    /* 完整写法 */
    border-width: 1px;
    border-style: solid;
    border-color: #333;
    
    /* 简写 */
    border: 1px solid #333;
    
    /* 单边设置 */
    border-top: 2px solid red;
    border-bottom: 1px dashed blue;
    
    /* 边框圆角 */
    border-radius: 5px;
    border-radius: 10px 20px;    /* 左上右下，右上左下 */
    border-radius: 10px 20px 30px 40px;
    
    /* 圆形 */
    border-radius: 50%;
}
```

### 边框样式

```css
.box {
    border-style: solid;    /* 实线 */
    border-style: dashed;   /* 虚线 */
    border-style: dotted;   /* 点线 */
    border-style: double;   /* 双线 */
    border-style: none;     /* 无边框 */
}
```

## Box Shadow（阴影）

```css
.box {
    /* x偏移 | y偏移 | 模糊半径 | 扩散半径 | 颜色 */
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    
    /* 内阴影 */
    box-shadow: inset 2px 2px 5px rgba(0,0,0,0.3);
    
    /* 多重阴影 */
    box-shadow: 
        2px 2px 5px rgba(0,0,0,0.3),
        -1px -1px 3px rgba(255,255,255,0.5);
}
```

## 居中方法

### 水平居中

```css
/* 行内/行内块 */
.parent { text-align: center; }

/* 块级元素 */
.child {
    width: 200px;
    margin: 0 auto;
}

/* Flex */
.parent {
    display: flex;
    justify-content: center;
}

/* Grid */
.parent {
    display: grid;
    place-content: center;
}
```

### 垂直居中

```css
/* Flex（推荐）*/
.parent {
    display: flex;
    align-items: center;
}

/* Grid */
.parent {
    display: grid;
    align-content: center;
}

/* 绝对定位 */
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

### 水平垂直居中

```css
/* Flex */
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Grid */
.parent {
    display: grid;
    place-items: center;
}

/* 绝对定位 */
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## 实战示例

```css
.card {
    width: 300px;
    padding: 20px;
    margin: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    background: white;
    box-sizing: border-box;
}

.card:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    transform: translateY(-4px);
    transition: all 0.3s ease;
}
```