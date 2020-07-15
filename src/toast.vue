<template>
    <div class="wrapper" :class="toastClass">
        <div class="toast" ref="toast" >
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>

            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HisenToast",
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: 5,
                validator(value){
                    if(value===false||typeof value==='number'){
                        return true
                    }else{
                        return false
                    }
                }
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) !== -1
                }

            }
        },
        computed: {
            toastClass() {
                return [`position-${this.position}`]
            }
        },
        created() {
            console.log(this.closeButton)
        },
        mounted() {
            this.updateStyle()
            this.execAutoClose()

        },
        methods: {
            //多少秒关闭
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            // 样式重置（高度）
            updateStyle() {
                this.$nextTick(() => {
                    console.log(this.$refs.toast.getBoundingClientRect().height)
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)  //toast实例
                }

            },
            log() {
                console.log('测试')
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.74);
    $toast-color: #fff;
    @keyframes slide-up {
        0% {
            opacity:0;
            transform:translateY(100%);
        }
        100%{
            opacity:1;
            transform:translateY(0%);

        }
    }
    @keyframes slide-down {
        0% {
            opacity:0;
            transform:translateY(-100%);
        }
        100%{
            opacity:1;
            transform:translateY(0%);

        }
    }
    @keyframes slide-center {
        0% {
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }
.wrapper{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &.position-top {
        top: 0;
        .toast{
            border-top-left-radius:0;
            border-top-right-radius:0;
            animation:slide-down 1s;
        }
    }

    &.position-middle {
        top: 50%;
        transform: translate(-50%,-50%);
        .toast{
            animation:slide-center 1s;
        }
    }

    &.position-bottom {
        bottom: 0;
        .toast{
            border-bottom-left-radius:0;
            border-bottom-right-radius:0;
            animation:slide-up 1s;
        }


    }
    .toast {
        /*border:1px solid red;*/


        min-height: $toast-min-height;
        font-size: $font-size;
        line-height: 1.8;
        display: flex;
        align-items: center;
        background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
        color: $toast-color;
        animation:fade-in 1s;
        border-radius:4px;

        .message {
            padding: 16px;
        }

        .line {
            height: 100%;
            border-left: 1px solid #666;
        }

        .close {
            padding: 0 16px;
            cursor: pointer;
            flex-shrinK: 0;
        }

    }
}

</style>
