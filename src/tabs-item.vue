<template>
    <div class="tabs-item">
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
            }
        }
    }
</script>

<style scoped>
    .tabs-item {

    }
</style>

