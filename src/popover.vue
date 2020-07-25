<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
            //内容区定位
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onClickDocument(e){
                console.log('this')
                console.log(this)
                if (this.$refs.contentWrapper.contains(e.target)) { //// 这句话解决了点击内容消失的问题
                    return
                } else {
                    this.close()

                }
            },
            open() {
                this.visible=true
              setTimeout(() => {
                    this.positionContent()
                  document.addEventListener('click', this.onClickDocument)
                })
            },
            close(){
                this.visible = false
                console.log('关闭')
                //如果不移除事件的话，监听器会叠加
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                console.log(event.target)
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    // console.log('下面')
                    // this.visible = !this.visible
                    if (this.visible === true) {
                        this.close()
                    }else{
                        this.open()
                        console.log('关闭')
                    }
                }
                // this.visible = !this.visible
                // if (this.visible === true) {
                //     this.$nextTick(()=>{
                //         document.body.appendChild(this.$refs.contentWrapper);
                //         let {width,height,top,left} =this.$refs.triggerWrapper.getBoundingClientRect()
                //         this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
                //         this.$refs.contentWrapper.style.top=top+window.scrollY+'px'
                //     })
                //     let eventHandler = () => {
                //         this.visible = false
                //         //如果不移除事件的化，监听器会叠加
                //         document.removeEventListener('click', eventHandler)
                //         console.log('关闭')
                //     }
                //     document.addEventListener('click', eventHandler)
                //
                // } else {
                //     console.log('关闭')
                // }
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
        transform: translateY(-100%);
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
</style>
