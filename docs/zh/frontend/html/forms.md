---
title: HTML 表单
icon: form
order: 3
---

# HTML 表单

表单是网页中用于收集用户输入的重要元素。

## 表单基础

```html
<form action="/submit" method="POST">
    <label for="name">姓名：</label>
    <input type="text" id="name" name="name" required>
    
    <button type="submit">提交</button>
</form>
```

## 输入类型

### 文本输入

```html
<input type="text" placeholder="请输入用户名">
<input type="password" placeholder="请输入密码">
<input type="email" placeholder="请输入邮箱">
<input type="tel" placeholder="请输入手机号">
<input type="url" placeholder="请输入网址">
<input type="search" placeholder="搜索...">
```

### 数字输入

```html
<input type="number" min="0" max="100" step="1">
<input type="range" min="0" max="100" value="50">
```

### 日期时间

```html
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">
```

### 其他类型

```html
<input type="color">
<input type="file" accept=".jpg,.png">
<input type="checkbox">
<input type="radio">
<input type="hidden">
```

## 表单属性

| 属性 | 说明 |
|------|------|
| `required` | 必填项 |
| `placeholder` | 占位符 |
| `disabled` | 禁用 |
| `readonly` | 只读 |
| `min/max` | 最小/最大值 |
| `pattern` | 正则验证 |
| `autocomplete` | 自动完成 |

## 下拉选择

```html
<select name="city">
    <option value="">请选择城市</option>
    <option value="bj">北京</option>
    <option value="sh">上海</option>
    <option value="gz">广州</option>
    <option value="sz">深圳</option>
</select>

<!-- 分组选择 -->
<select name="country">
    <optgroup label="中国">
        <option value="bj">北京</option>
        <option value="sh">上海</option>
    </optgroup>
    <optgroup label="美国">
        <option value="ny">纽约</option>
        <option value="la">洛杉矶</option>
    </optgroup>
</select>
```

## 文本域

```html
<textarea name="message" rows="4" cols="50" placeholder="请输入留言"></textarea>
```

## 表单验证

```html
<!-- 必填验证 -->
<input type="text" required>

<!-- 邮箱验证 -->
<input type="email" required>

<!-- 长度验证 -->
<input type="text" minlength="3" maxlength="20">

<!-- 数字范围 -->
<input type="number" min="0" max="100">

<!-- 正则表达式 -->
<input type="tel" pattern="^1[3-9]\d{9}$">
```

## 完整示例

```html
<form action="/register" method="POST">
    <fieldset>
        <legend>用户注册</legend>
        
        <div>
            <label for="username">用户名：</label>
            <input type="text" id="username" name="username" 
                   required minlength="3" maxlength="20">
        </div>
        
        <div>
            <label for="email">邮箱：</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div>
            <label for="password">密码：</label>
            <input type="password" id="password" name="password" 
                   required minlength="6">
        </div>
        
        <div>
            <label for="confirm-password">确认密码：</label>
            <input type="password" id="confirm-password" required>
        </div>
        
        <div>
            <label for="gender">性别：</label>
            <select id="gender" name="gender">
                <option value="">请选择</option>
                <option value="male">男</option>
                <option value="female">女</option>
            </select>
        </div>
        
        <div>
            <label>
                <input type="checkbox" name="terms" required>
                我同意服务条款
            </label>
        </div>
        
        <button type="submit">注册</button>
        <button type="reset">重置</button>
    </fieldset>
</form>
```