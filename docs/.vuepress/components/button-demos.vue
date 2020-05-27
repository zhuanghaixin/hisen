<template>
<div style="padding-top: 16px;">
    <h-button>默认按钮</h-button>
    <h-button icon="setting" icon-position="right" >设置按钮</h-button>
    <h-button :loading="loading1">加载按钮</h-button>
    <h-button disabled>禁用按钮</h-button>
    <h-button icon="setting" icon-position="left" :loading="loading2" @change="loading2=!loading2">
        设置
    </h-button>
    <h-button icon="setting" icon-position="right" :loading="loading3" @change="loading3=!loading3">
        设置
    </h-button>
</div>
</template>

<script>
    import Button from '../../../src/button.vue'
    export default {
        name: "button-demos",
        components:{
            'h-button':Button,
        },
        data(){
            return{
                    loading1: true,
                    loading2: true,
                    loading3: true,
            }

        }
    }
</script>
<style scoped>

</style>
