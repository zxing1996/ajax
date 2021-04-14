#  简介

- 对原生js的ajax操作进行了简单的封装
- 一行代码解决问题
- jquery.ajax的替代品

# 特点

- 极简

- 基于Promise

- 有注释

  # API

get

```js
  $.get("http://localhost:3000/user", {id: 1}).then((result) => {
      console.log(result)
  })
```
post

  ```js
$.post("http://localhost:3000/user", {id: 2, name: "闪烁"}).then((result) => {
    console.log(result)
})
  ```