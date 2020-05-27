<template>
    <div style="padding-top: 16px;">
        <div class="box">
            <h-input value="正常状态"></h-input>
            <h-input value="禁止状态" :disabled="true"></h-input>
            <h-input value="只读状态" :readonly="true"></h-input>
        </div>
<!--        <div class="box">-->
<!--            <h-input value="张三" error="姓名不能少于两个字" @change="inputChange"></h-input>-->
<!--        </div>-->
    </div>

</template>

<script>
    import Input from '../../../src/Input.vue'
    export default {
        name: "input-demo-1",
        components: {
            'h-input':Input
        },

    }
</script>

<style scoped>

</style>
