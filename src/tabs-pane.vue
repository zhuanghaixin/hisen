<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HisenTabsPane",
        inject: ['eventBus'],
        data(){
            return{
                active:false
            }
        },
        props:{
            name:{
                type:String|Number,
                required:true,
            }
        },
        computed:{
            classes(){
                return{
                    active:this.active
                }
            }
        },
        mounted() {
            //爷爷給孙子到eventBus
            // console.log('爷爷給孙子到eventBus')
            // console.log(this.eventBus)
            this.eventBus.$on('update:selected',(name)=>{
                if(name===this.name){
                    console.log(`我pane${this.name}被选中了`)
                    this.active=true
                }else{
                    console.log(`我pane${this.name}没被选中了`)
                    this.active=false
                }
                // console.log(name)
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        &.active{
            background:#ccc;

         }
    }
</style>
