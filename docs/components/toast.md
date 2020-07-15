---
title: Toast
---

# Toast
## this.$toast

<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

```html
<template>
    <div style="padding-top: 16px;">
            <h-button @change="$toast('点击弹出提示',{autoClose:50})">上方弹出</h-button>
            <h-button @change="$toast('点击弹出提示', {position:'middle'})">中间弹出</h-button>
            <h-button @change="$toast('点击弹出提示', {position:'bottom'})">下方弹出</h-button>
    </div>
</template>
```
## 设置关闭按钮


<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>

```html
<template>
    <div>
        <h-button @change="onClickButton">上方弹出</h-button>
    </div>
</template>

<script>
    export default {
        name: "toast-demos",
        components:{
            'h-button':Button,
        },
        methods: {
            onClickButton () {
                this.$toast('你知道我在等你吗？', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            }
        },
    }
</script>

```

## 支持 HTML

<ClientOnly>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

```html
<template>
    <div>
        <h-button @change="onClickButton">上方弹出</h-button>
    </div>
</template>

<script>
    export default {
        name: "toast-demos",
        components:{
            'h-button':Button,
        },
        methods: {
            onClickButton () {
                this.$toast('<strong style="color:red">加粗的提示</strong>', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    },
                    enableHtml:true,
                })
            }
        },
    }
</script>

<style scoped>
</style>

```
