<template>
    <div style="padding-top: 16px;">
        <h-button @change="onClickButton">上方弹出</h-button>
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

<style scoped>
</style>
