<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HisenTabsItem",
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
               type:String|Number,
                required:true,
            }
        },
        inject:['eventBus'],
        created(){
            // //爷爷給孙子到eventBus
            // console.log('爷爷給孙子到eventBus')
            // console.log(this.eventBus)
            this.eventBus.$on('update:selected',(name)=>{
                console.log(name)
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped>
    .tabs-item {

    }
</style>

