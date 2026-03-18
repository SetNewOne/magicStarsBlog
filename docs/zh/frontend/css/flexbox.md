---
title: Flexbox 布局
icon: css
order: 5
---

# Flexbox 布局

Flexbox（弹性盒子）是一种一维布局模型，非常适合处理行或列方向的布局。

## 基础概念

```css
.container {
    display: flex;
    /* 或 */
    display: inline-flex;
}
```

## 容器属性

### flex-direction（主轴方向）

```css
.container {
    flex-direction: row;           /* 默认：左到右 */
    flex-direction: row-reverse;   /* 右到左 */
    flex-direction: column;        /* 上到下 */
    flex-direction: column-reverse;/* 下到上 */
}
```

### flex-wrap（换行）

```css
.container {
    flex-wrap: nowrap;     /* 不换行（默认）*/
    flex-wrap: wrap;       /* 换行，第一行在上 */
    flex-wrap: wrap-reverse; /* 换行，第一行在下 */
}
```

### justify-content（主轴对齐）

```css
.container {
    justify-content: flex-start;     /* 左对齐 */
    justify-content: flex-end;       /* 右对齐 */
    justify-content: center;         /* 居中 */
    justify-content: space-between;  /* 两端对齐 */
    justify-content: space-around;   /* 等距分布 */
    justify-content: space-evenly;   /* 等距（兼容性好）*/
}
```

### align-items（交叉轴对齐）

```css
.container {
    align-items: stretch;        /* 拉伸（默认）*/
    align-items: flex-start;     /* 顶部对齐 */
    align-items: flex-end;       /* 底部对齐 */
    align-items: center;         /* 居中 */
    align-items: baseline;       /* 基线对齐 */
}
```

### align-content（多行对齐）

```css
.container {
    align-content: stretch;        /* 拉伸 */
    align-content: flex-start;     /* 顶部 */
    align-content: flex-end;       /* 底部 */
    align-content: center;         /* 居中 */
    align-content: space-between;  /* 两端 */
    align-content: space-around;   /* 等距 */
}
```

## 项目属性

### flex-basis（基础尺寸）

```css
.item {
    flex-basis: 200px;  /* 项目在主轴上的初始大小 */
}
```

### flex-grow（放大比例）

```css
.item {
    flex-grow: 0;  /* 默认：不放大 */
    flex-grow: 1;  /* 占据剩余空间 */
}
```

### flex-shrink（缩小比例）

```css
.item {
    flex-shrink: 1;  /* 默认：可缩小 */
    flex-shrink: 0;  /* 不缩小 */
}
```

### flex（简写）

```css
.item {
    /* flex: flex-grow flex-shrink flex-basis */
    flex: 0 1 auto;  /* 默认 */
    flex: 1;         /* flex: 1 1 0% */
    flex: auto;      /* flex: 1 1 auto */
    flex: none;      /* flex: 0 0 auto */
}
```

### align-self（单个项目对齐）

```css
.item {
    align-self: auto;       /* 继承 */
    align-self: flex-start; /* 顶部 */
    align-self: flex-end;   /* 底部 */
    align-self: center;     /* 居中 */
    align-self: stretch;    /* 拉伸 */
    align-self: baseline;   /* 基线 */
}
```

### order（排序）

```css
.item {
    order: 0;  /* 默认：0，数值越小越靠前 */
}
```

## 常见布局

### 水平居中

```css
.container {
    display: flex;
    justify-content: center;
}
```

### 垂直居中

```css
.container {
    display: flex;
    align-items: center;
}
```

### 垂直水平居中

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### 等高两列布局

```css
.container {
    display: flex;
}
.sidebar {
    width: 200px;
}
.content {
    flex: 1;
}
```

### 三列布局（中间自适应）

```css
.container {
    display: flex;
}
.left, .right {
    width: 200px;
}
.center {
    flex: 1;
}
```

### 导航菜单

```css
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### 栅格系统

```css
.row {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
}
.col {
    padding: 10px;
    box-sizing: border-box;
}
.col-6 { width: 50%; }
.col-4 { width: 33.33%; }
.col-3 { width: 25%; }
```

### 居中弹窗

```css
.modal-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
}
```

## 实战示例

### 圣杯布局

```css
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.header, .footer {
    flex-shrink: 0;
}
.main {
    flex: 1;
    display: flex;
}
.sidebar-left, .sidebar-right {
    width: 200px;
}
.content {
    flex: 1;
}
```

### 流式卡片网格

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    width: calc(25% - 15px);
    min-width: 200px;
}
```

## 兼容性

```css
/* 旧版语法（可选）*/
.container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
```