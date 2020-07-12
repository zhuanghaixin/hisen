# hisen
<h2 align="center">一个基于Vue的UI组件库</h2>

[![Build Status](https://travis-ci.org/zhuanghaixin/hisen.svg?branch=master)](https://travis-ci.org/zhuanghaixin/hisen)
![LISENCE](https://img.shields.io/npm/l/express.svg)
![npm](https://img.shields.io/npm/v/hisen.svg)
## 介绍（Introduction)
这是基于Vue实现的UI组件库，仅供平时学习所用。
## TODO
   - [x] Icon
   - [x] Button
   - [x] Input
   - [x] Grid
   - [x] Layout
   - [ ] Modal
   - [x] Toast
   - [ ] Popover
## 开始使用 （Usage)
### 1.安装（Installation)
```
npm i --save hisen

```
### 2.引入
以Vue cli3为例，App.vue
```

    import {Button} from 'hisen'
    import 'hisen/dist/index.css'

    export default {
        name: 'app',
        data(){
            return {
                loading1: true,
                loading2: true,
                loading3: true,
                msg:'123'
            }
        }
        ,
        components: {
            'g-button': Button
        }
    }
```
### 3.样式（Style)
以Vue cli3为例，App.vue
使用本框架前，请在CSS开启border-box
```css
*{
    box-sizing:border-box;
 }
*::before{
             box-sizing:border-box;
}
*::after{
             box-sizing:border-box;
}
```
### 4。引入svg symbol
以Vue cli3为例，index.html
```
    <script src="//at.alicdn.com/t/font_1151469_mpzt27d1mxk.js"></script>
```
- 你需要设置默认颜色和变量
```css
:root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: red;
    }
```
- IE11及以上浏览器

## 文档 (Documentation)
## 提问（Questions）
## 问题（Issue)
## 更新日志(Changelog)
## 保持联系（Stay In Touch）
## 贡献（Contribution)
- [Hisen](https://github.com/zhuanghaixin)
## 执照（License）
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Haixing (Hisen) Zhuang
