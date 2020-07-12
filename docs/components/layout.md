---
title: Layout
---
# 布局
## 上下布局
<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

```html
<template>
    <div>
            <h-layout style="height:100vh">
                <h-header class="demo">Header</h-header>
                <h-content class="demo">Content</h-content>
                <h-footer class="demo">Footer</h-footer>
            </h-layout>
    </div>
</template>

<style scoped lang="scss">
    .demo{
        /*border:1px solid #666;*/
        min-height:100px;
    }
    .sider {
        background: #d5dce5;
        width: 200px;
    }
    .header{
        background:#b5c0cf;
        height: 100px;
    }
    .content{
        background:#eaeef2;
    }
    .footer{
        background:#ccc;
        height: 50px;
    }
</style>

```
## Sider在中间的左右布局
<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

```html
<template>
    <div>
            <h-layout style="height:100vh">
                <h-header class="demo">Header</h-header>
                <h-layout>
                    <h-sider class="demo">Sider</h-sider>
                    <h-content class="demo">Content</h-content>
                </h-layout>
                <h-footer class="demo">Footer</h-footer>
            </h-layout>
    </div>
</template>

<style scoped lang="scss">
    .demo{
        /*border:1px solid #666;*/
        min-height:100px;
    }
    .sider {
        background: #d5dce5;
        width: 200px;
    }
    .header{
        background:#b5c0cf;
        height: 100px;
    }
    .content{
        background:#eaeef2;
    }
    .footer{
        background:#ccc;
        height: 50px;
    }
</style>

```
## Sider在外部的左右布局
<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

```html
<template>
    <div>
        <h-layout style="height:100vh">
            <h-sider class="demo">Sider</h-sider>
            <h-layout class="demo">
                <h-header class="demo">Header</h-header>
                <h-content class="demo">Content</h-content>
                <h-footer class="demo">Footer</h-footer>
            </h-layout>
        </h-layout>
    </div>
</template>

<style scoped lang="scss">
    .demo{
        /*border:1px solid #666;*/
        min-height:100px;
    }
    .sider {
        background: #d5dce5;
        width: 200px;
    }
    .header{
        background:#b5c0cf;
        height: 100px;
    }
    .content{
        background:#eaeef2;
    }
    .footer{
        background:#ccc;
        height: 50px;
    }
</style>

```
