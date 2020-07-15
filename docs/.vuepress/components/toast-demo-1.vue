<template>
    <div style="padding-top: 16px;">
            <h-button @change="$toast('点击弹出提示',{autoClose:50})">上方弹出</h-button>
            <h-button @change="$toast('点击弹出提示', {position:'middle'})">中间弹出</h-button>
            <h-button @change="$toast('点击弹出提示', {position:'bottom'})">下方弹出</h-button>
    </div>
</template>

<script>
    import plugin from '../../../src/plugin'
    import Button from '../../../src/button.vue'
    import Vue from 'vue'
    Vue.use(plugin)
    export default {
        name: "toast-demos",
        components:{
            'h-button':Button,
        }
    }
</script>

<style scoped>
</style>
