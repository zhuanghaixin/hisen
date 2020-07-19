<template>
    <div class="tabs">
        <slot></slot>

    </div>
</template>

<script>
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
            this.$emit('update:selected','xxx')
        }
    }
</script>

<style scoped>
    .tabs {

    }
</style>
