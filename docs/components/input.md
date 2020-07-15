---
title:Input
---
# Input

##  基础用法

<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

 
```html 
<template>
<div>
    <div class="box">
        <h-input value="正常状态"></h-input>
        <h-input value="禁止状态" :disabled="true"></h-input>
        <h-input value="只读状态" :readonly="true"></h-input>
    </div>
</div>
</template>
```

##  双向绑定

<ClientOnly>
   <input-demo-2></input-demo-2>
</ClientOnly>

 
```html 
<template>
<div>
    <div>
        <h-input v-model="value"></h-input>
        <div>
            value: {{value}}
        </div>
    </div>
</div>
</template>
```
##  提示
<ClientOnly>
   <input-demo-3></input-demo-3>
</ClientOnly>

```html
<template>
<div style="padding-top: 16px;">
    <div class="box">
        <h-input :value="values" :error="error" @change="inputChange"></h-input>
    </div>
</div>
</template>

```

