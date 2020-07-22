<template>
    <div class="popover" @click.stop="xx">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HisenPopover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            xx() {
                this.visible = !this.visible
                console.log('切换visible')
                if (this.visible === true) {
                            console.log('新增document click监听器')
                            let eventHandler=()=>{
                                console.log('点击body就关闭popover')
                                this.visible = false
                                console.log('document隐藏popover')
                                console.log('删除监听器')
                                document.removeEventListener('click', eventHandler)
                            }
                            document.addEventListener('click', eventHandler)

                }else{
                    console.log('隐藏popover')
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
        }
    }
</style>
