<template>
    <div class="h-row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "hisen-row"
    }
</script>

<style scoped lang="scss">
.h-row{
    display: flex;
}
</style>