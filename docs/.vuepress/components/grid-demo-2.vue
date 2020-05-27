<template>
    <div style="padding-top: 16px;">
        <h-row class="demoRow" gutter="10">
            <h-col span="8">
                <div class="demo">8</div>
            </h-col>
            <h-col span="8">
                <div class="demo">8</div>
            </h-col>
            <h-col span="8">
                <div class="demo">8</div>
            </h-col>
        </h-row>

        <h-row class="demoRow" gutter="10">
            <h-col span="6">
                <div class="demo">6</div>
            </h-col>
            <h-col span="6">
                <div class="demo">6</div>
            </h-col>
            <h-col span="6">
                <div class="demo">6</div>
            </h-col>
            <h-col span="6">
                <div class="demo">6</div>
            </h-col>
        </h-row>
    </div>
</template>

<script>
    import Col from '../../../src/col.vue'
    import Row from '../../../src/row.vue'

    export default {
        name: "grid-demo-2",
        components: {
            'h-col': Col,
            'h-row': Row,
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
