<template>
    <div class="tabs">
        <slot></slot>

    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "HisenTabs",
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            },

        },
        created(){
            // console.log(this.eventBus)
            // this.$emit('update:selected','xxx')
        },
        provide(){
           return{
               eventBus:this.eventBus
           }
        },
        data(){
            return{
                eventBus:new Vue()
            }
        }
    }
</script>

<style scoped>
    .tabs {

    }
</style>
