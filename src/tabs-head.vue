<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: "HisenTabsHead",
        inject: ['eventBus'],
        created(){
            //爷爷給爸爸到eventBus
            // console.log('爷爷給爸爸到eventBus')
            // console.log(this.eventBus)
        }
    }
</script>

<style scoped>
    .tabs-head {

    }
</style>
