---
title: 浏览器渲染机制
icon: globe
order: 1
---

# 浏览器渲染机制

页面卡顿、抖动、闪烁很多时候都和渲染过程有关。

## 渲染步骤

```text
HTML → DOM
CSS → CSSOM
DOM + CSSOM → Render Tree
布局 Layout
绘制 Paint
合成 Composite
```

## 重排和重绘

重排会重新计算布局，成本通常比重绘更高。

容易触发布局变化的操作：

- 修改 `width`、`height`、`padding`、`margin`。
- 修改元素位置。
- 频繁读取 `offsetWidth`、`clientHeight` 后又写样式。
- 动态插入大量 DOM。

## 动画建议

优先动画化：

```css
.panel {
  transform: translateY(0);
  opacity: 1;
  transition: transform 160ms ease, opacity 160ms ease;
}
```

少动画化：

```css
/* 容易触发布局变化 */
width: 200px;
height: 120px;
top: 10px;
left: 10px;
```

## 排查方法

1. 用 Performance 面板录制卡顿过程。
2. 看耗时集中在脚本、布局还是绘制。
3. 检查是否有频繁 DOM 读写。
4. 检查动画是否改变布局属性。
5. 检查图片和字体是否导致布局跳动。
