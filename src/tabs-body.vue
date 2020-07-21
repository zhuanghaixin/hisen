<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HisenTabsBody",
        inject: ['eventBus'],
        created(){
            //爷爷給爸爸到eventBus
            // console.log('爷爷給爸爸到eventBus')
            // console.log(this.eventBus)
        }
    }
</script>

<style scoped lang="scss">
.tabs-body{
}
</style>
