<template>
    <div style="padding-top: 16px;">
        <h-row class="demoRow" gutter="10">
            <h-col span="8">
                <div class="demo">8</div>
            </h-col>
            <h-col span="8" offset="8">
                <div class="demo">8</div>
            </h-col>
        </h-row>
        <h-row class="demoRow" gutter="10">
            <h-col span="6" offset="6">
                <div class="demo">6</div>
            </h-col>
            <h-col span="6" offset="6">
                <div class="demo">6</div>
            </h-col>
        </h-row>
        <h-row class="demoRow" gutter="10">
            <h-col span="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4" offset="4">
                <div class="demo">4</div>
            </h-col>
            <h-col span="4" offset="8">
                <div class="demo">4</div>
            </h-col>
        </h-row>
        <h-row class="demoRow" gutter="10">
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2">
                <div class="demo">2</div>
            </h-col>
            <h-col span="2" offset="2">
                <div class="demo">2</div>
            </h-col>
        </h-row>
    </div>
</template>

<script>
    import Col from '../../../src/col.vue'
    import Row from '../../../src/row.vue'

    export default {
        name: "grid-demo-3",
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
