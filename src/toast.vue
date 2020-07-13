<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "HisenToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default(){
                    return {
                        text: '关闭',
                        callback: (toast) => {
                            console.log(11111)
                            toast.close()
                        }
                    }
                }
            }
            // position:{
            //     type:String,
            //     default:'top'
            // }
        },
        created(){
            console.log(this.closeButton)
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                this.closeButton.callback()
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.74);
    $toast-color: #fff;
    .toast {
        /*border:1px solid red;*/
        position: fixed;
        top: 0;
        left: 50%;
        height: $toast-height;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        display: flex;
        align-items: center;
        background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
        color: $toast-color;
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        .close{
            padding-left:16px;
            cursor:pointer;
        }
    }
</style>
