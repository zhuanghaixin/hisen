<template>
<div style="padding-top: 16px;">
    <div class="box">
        <h-input :value="values" :error="error" @change="inputChange"></h-input>
    </div>
</div>
</template>

<script>
    import Input from "../../../src/input";

    export default {
        name: "input-demo-3",
        components: {
            'h-input':Input
        },
        data(){
            return {
                error:'姓名不能少于两个字',
                values:'张三'

            }
        },
        methods:{
            inputChange:function (e) {
                if(e.length>=3){
                    this.values=e
                    this.error=''
                }else{
                    this.values=e
                    this.error='姓名不能少于两个字'
                }
            }
        }
    }
</script>

<style scoped>

</style>
