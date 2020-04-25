<template>
<div>
    <h-button>默认按钮</h-button>
    <h-button icon="setting" icon-position="right" >设置按钮</h-button>
    <h-button :loading="true">加载按钮</h-button>
    <h-button disabled>禁用按钮</h-button>
    <h-button icon="setting" icon-position="right" :loading="true" >按钮在右</h-button>
</div>
</template>

<script>
    import Button from '../../../src/button.vue'
    export default {
        name: "button-demos.vue",
        components:{
            'h-button':Button,
        },
        data(){
            return{

            }

        }
    }
</script>
<style scoped>

</style>
