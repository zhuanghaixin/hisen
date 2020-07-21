<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HisenTabsPane",
        inject: ['eventBus'],
        created() {
            //爷爷給孙子到eventBus
            // console.log('爷爷給孙子到eventBus')
            // console.log(this.eventBus)
            this.eventBus.$on('update:selected',(name)=>{
                console.log(name)
            })
        }
    }
</script>

<style scoped>
    .tabs-pane {

    }
</style>
