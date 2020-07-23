<template>
    <div class="popover" @click.stop="xx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
       <span ref="triggerWrapper">
            <slot></slot>
       </span>
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
        mounted() {
            // console.log(this.$refs.contentWrapper);
            // document.body.appendChild(this.$refs.contentWrapper)}
        },
        methods: {
            xx() {
                this.visible = !this.visible
                console.log('切换visible')
                if (this.visible === true) {
                    this.$nextTick(()=>{
                        document.body.appendChild(this.$refs.contentWrapper);
                        let {width,height,top,left} =this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
                        this.$refs.contentWrapper.style.top=top+window.scrollY+'px'
                    })

                    console.log('新增document click监听器')
                    let eventHandler = () => {
                        console.log('点击body就关闭popover')
                        this.visible = false
                        console.log('document隐藏popover')
                        console.log('删除监听器')
                        //如果不移除事件的化，监听器会叠加
                        document.removeEventListener('click', eventHandler)
                    }
                    document.addEventListener('click', eventHandler)

                } else {
                    console.log('隐藏popover')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        transform:translateY(-100%);
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
</style>
