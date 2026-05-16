---
title: 可访问性
icon: universal-access
order: 2
---

# 可访问性

可访问性让更多用户可以使用页面，也能提升页面语义、键盘操作和自动化测试质量。

## 基础原则

- 能用原生元素就不用自定义元素。
- 按钮做动作，链接去地址。
- 表单控件要有标签。
- 图片要有合适的 `alt`。
- 弹窗要能聚焦和关闭。
- 颜色不能作为唯一信息来源。

## 表单标签

```html
<label for="email">邮箱</label>
<input id="email" name="email" type="email" autocomplete="email">
```

`label` 能提高点击区域，也能让读屏软件知道输入框含义。

## 图标按钮

```html
<button type="button" aria-label="关闭">
  ×
</button>
```

没有文字的按钮必须提供可读名称。

## 键盘操作

需要检查：

- Tab 能按合理顺序移动。
- Enter 或 Space 能触发按钮。
- 弹窗打开后焦点进入弹窗。
- 弹窗关闭后焦点回到触发按钮。

## 对比度

正文、按钮、错误提示应保持足够对比度。浅灰文字在白底上很容易不可读。
