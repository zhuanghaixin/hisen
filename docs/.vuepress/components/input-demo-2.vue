<template>
    <div style="padding-top: 16px;">
        <h-input value="xx" v-model="message"></h-input>
        <p>value:{{message}}</p>
    </div>
</template>
<script>
    import Input from "../../../src/input";

    export default {
        components: {
            'h-input':Input
        },
        data(){
            return{
                message:''
            }
        }
    }
</script>
