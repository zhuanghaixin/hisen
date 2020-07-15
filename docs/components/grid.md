---
title: Grid
---
# 网格

## 24格网格


<ClientOnly>
   <grid-demo-1></grid-demo-1>
</ClientOnly>

```html
<template>
    <div>
        <h-row class="demoRow">
            <h-col span="8">
                <div class="demo">8</div>
            </h-col>
            <h-col span="8">
                <div class="demo">8</div>
            </h-col>
            <h-col span="8">
                <div class="demo">8</div>
            </h-col>
        </h-row>
        <h-row class="demoRow">
            <h-col span="6">
                <div class="demo">6</div>
            </h-col>
            <h-col span="6">
                <div class="demo">6</div>
            </h-col>
            <h-col span="6">
                <div class="demo">6</div>
            </h-col>
            <h-col span="6">
                <div class="demo">6</div>
            </h-col>
        </h-row>
        <h-row class="demoRow">
            <h-col span="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4">
                <div class="demo">4</div>
            </h-col>
        </h-row>
        <h-row class="demoRow">
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
        </h-row>
    </div>
</template>

```
## 设置gutter

<ClientOnly>
   <grid-demo-2></grid-demo-2>
</ClientOnly>

```html
<template>
<div>
    <h-row class="demoRow" gutter="10">
        <h-col span="8">
            <div class="demo">8</div>
        </h-col>
        <h-col span="8">
            <div class="demo">8</div>
        </h-col>
        <h-col span="8">
            <div class="demo">8</div>
        </h-col>
    </h-row>

    <h-row class="demoRow" gutter="10">
        <h-col span="6">
            <div class="demo">6</div>
        </h-col>
        <h-col span="6">
            <div class="demo">6</div>
        </h-col>
        <h-col span="6">
            <div class="demo">6</div>
        </h-col>
        <h-col span="6">
            <div class="demo">6</div>
        </h-col>
    </h-row>
</div>
</template>
```
## 设置空隙

<ClientOnly>
  <grid-demo-3></grid-demo-3>
</ClientOnly>


```html
<template>
    <div>
        <h-row class="demoRow" gutter="10">
            <h-col span="8">
                <div class="demo">8</div>
            </h-col>
            <h-col span="8" offset="8">
                <div class="demo">8</div>
            </h-col>
        </h-row>
        <h-row class="demoRow" gutter="10">
            <h-col span="6" offset="6">
                <div class="demo">6</div>
            </h-col>
            <h-col span="6" offset="6">
                <div class="demo">6</div>
            </h-col>
        </h-row>
        <h-row class="demoRow" gutter="10">
            <h-col span="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4" offset="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4" offset="8">
                <div class="demo">4</div>
            </h-col>
        </h-row>
        <h-row class="demoRow" gutter="10">
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div class="demo">2</div>
            </h-col>
        </h-row>
    </div>
</template>
```

## 响应式布局

<ClientOnly>
  <grid-demo-4></grid-demo-4>
</ClientOnly>

```html
<template>
  <div>
    <h-row>
        <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
            <div class="demo"></div>
        </h-col>
        <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
            <div class="demo"></div>
        </h-col>
        <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
            <div class="demo"></div>
        </h-col>
        <div class="demo"></div>
        <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        </h-col>
        <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
            <div class="demo"></div>
        </h-col>
        <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
            <div class="demo"></div>
        </h-col>
    </h-row>
   </div>
</template>
```
