<template>
    <div class="h-row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "hisen-row",
        props:{
            gutter:{
                type:[Number,String]
            }
        }
    }
</script>

<style scoped lang="scss">
.h-row{
    display: flex;
}
</style>