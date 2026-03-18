---
title: Grid 布局
icon: css
order: 6
---

# Grid 布局

CSS Grid 是一个二维布局系统，非常适合创建复杂的网页布局。

## 基础概念

```css
.container {
    display: grid;
    /* 或 */
    display: inline-grid;
}
```

## 容器属性

### grid-template-columns / rows

```css
.container {
    /* 固定列宽 */
    grid-template-columns: 100px 100px 100px;
    
    /* 百分比 */
    grid-template-columns: 1fr 1fr 1fr;
    
    /* 混合使用 */
    grid-template-columns: 100px 1fr 200px;
    
    /* 重复 */
    grid-template-columns: repeat(3, 1fr);
    
    /* 自适应 */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### gap

```css
.container {
    gap: 20px;           /* 行和列间距 */
    row-gap: 10px;       /* 行间距 */
    column-gap: 20px;    /* 列间距 */
}
```

### justify-items / align-items

```css
.container {
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
}
```

### justify-content / align-content

```css
.container {
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

## 项目属性

### grid-column / grid-row

```css
.item {
    grid-column: 1 / 3;        /* 从第1列到第3列 */
    grid-column: span 2;       /* 跨越2列 */
    grid-row: 1 / 4;           /* 从第1行到第4行 */
    grid-row: span 2;          /* 跨越2行 */
}
```

### grid-area

```css
.item {
    /* grid-row-start / column-start / row-end / column-end */
    grid-area: 1 / 1 / 3 / 3;
    
    /* 或命名区域 */
    grid-area: header;
}
```

### justify-self / align-self

```css
.item {
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```

## 常见布局

### 基础网格

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

### 响应式网格

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### 经典圣杯布局

```css
.container {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav    main   aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

### 卡片网格

```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
}
```

### 等高列

```css
.container {
    display: grid;
    grid-template-columns: 250px 1fr;
}
```

### 复杂表单布局

```css
.form {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 16px;
    align-items: center;
}
```

## 命名网格线

```css
.container {
    grid-template-columns: [start] 100px [main-start] 1fr [main-end] 100px [end];
    grid-template-rows: [top] auto [content] 1fr [bottom];
}
.item {
    grid-column: main-start / main-end;
    grid-row: content;
}
```

## 命名网格区域

```css
.container {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
}
```

## 技巧

### 自动填充 vs 自动适应

```css
/* auto-fill: 尽可能多填充，空格保留 */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: 尽可能多适应，空格合并 */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

### 隐藏空轨道

```css
.container {
    grid-auto-rows: minmax(100px, auto);
}
```

### 排序

```css
.item:nth-child(2) {
    order: -1;  /* 提前显示 */
}
```