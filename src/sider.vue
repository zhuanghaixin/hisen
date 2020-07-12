<template>
    <transition
            name="fade"
            @before-leave="beforeLeave"

    >
        <div class="sider" v-if="visible">
            <slot></slot>
            <button
                    @click="hide"

            >close
            </button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "HisenSider",
        data(){
            return{
                visible:true
            }
        },
        methods:{
            hide(){
                this.visible = false
            },
            // beforeEnter(el) {
            //     console.log('beforeEnter')
            //     this.elementWidth = 100;
            //     el.style.width = this.elementWidth + 'px'
            // },
            // enter(el, done) {
            //     console.log('enter')
            //     let round = 1
            //     const interval = setInterval(() => {
            //         el.style.width = (this.elementWidth + round * 10) + 'px'
            //         round++
            //         if (round > 20) {
            //             clearInterval(interval)
            //             //done告诉Vue 动画结束了
            //             done()
            //         }
            //     }, 20)
            // },
            // afterEnter(el) {
            //     console.log(' afterEnter')
            // },
            // enterCancelled(el) {
            //     console.log('enterCancelled')
            // },
            beforeLeave(el) {

                console.log('beforeLeave')
                console.log(el)
                let width=el.clientWidth
                el.style.marginLeft=-el.clientWidth+'px'
            },
            // leave(el, done) {
            //     console.log('leave')
            //     let round = 1
            //     const interval = setInterval(() => {
            //         el.style.width = (this.elementWidth - round * 10) + 'px'
            //         round++
            //         if (round > 20) {
            //             clearInterval(interval)
            //             //done告诉Vue 动画结束了
            //             done()
            //         }
            //     }, 20)
            // },
            // afterLeave(el) {
            //     console.log('afterLeave');
            // },
            // leaveCancelled(el) {
            //     console.log('leaveCancelled')
            // },
        }
    }
</script>

<style scoped lang="scss">
    .sider{
        position: relative;
        button{
            position: absolute;
            top:0;
            right:0;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
/*    .fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {
        margin-left: -100%;
        opacity: 0;
    }*/
</style>
