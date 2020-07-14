<template>
    <div class="toast" ref="wrapper" :class="toastClass">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div  v-else v-html="$slots.default[0]"></div>
            </div>

        <div class="line" ref="line"></div>
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
                default: 500
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
                    }, this.autoCloseDelay * 1000)
                }
            },
            // 样式重置（高度）
            updateStyle() {
                this.$nextTick(() => {
                    console.log(this.$refs.wrapper.getBoundingClientRect().height)
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
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
    @keyframes fade-in {
        0% {
            opacity:0;
            transform:translate(-50%,100%);
        }
        100%{
            opacity:1;
            transform:translate(-50%,0%);

        }
    }

    .toast {
        /*border:1px solid red;*/
        position: fixed;
        left: 50%;
        min-height: $toast-min-height;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        display: flex;
        align-items: center;
        background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
        color: $toast-color;
        animation:fade-in 1s;

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

        &.position-top {
            top: 0;
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }

        &.position-bottom {
            bottom: 0;
        }
    }
</style>
