---
title: CSS Basics
icon: css
order: 1
---

# CSS Basics

CSS (Cascading Style Sheets) is used to control the appearance and layout of web pages.

## Introduction

```html
<style>
    h1 { color: blue; }
    p { color: gray; }
</style>
```

## Selectors

```css
/* Tag selector */
p { }

/* Class selector */
.box { }

/* ID selector */
#header { }

/* Attribute selector */
[type="text"] { }

/* Pseudo-class */
:hover { }
```

## Box Model

```css
.box {
    width: 200px;
    padding: 20px;
    border: 1px solid #ccc;
    margin: 10px;
}
```

## Flexbox

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## Grid

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```