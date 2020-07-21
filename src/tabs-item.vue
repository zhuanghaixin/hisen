<template>
    <div class="tabs-item" @click="xxx" :class="classes">
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
        data(){
            return{
                active:false
            }
        },
        computed:{
            classes(){
                return{
                    active:this.active
                }
            }
        },
        inject:['eventBus'],
        created(){
            // //爷爷給孙子到eventBus
            // console.log('爷爷給孙子到eventBus')
            // console.log(this.eventBus)
            this.eventBus.$on('update:selected',(name)=>{
                if(name===this.name){
                    console.log(`我${this.name}被选中了`)
                    this.active=true
                }else{
                    console.log(`我${this.name}没被选中了`)
                    this.active=false
                }
                // console.log(name)
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item {
        flex-shrink:0;
        padding: 0 2em;

        &.active{
            display: block;
            background:#ccc;

        }

    }
</style>

