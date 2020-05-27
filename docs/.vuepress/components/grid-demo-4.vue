<template>
    <div style="padding-top: 16px;">
        <h-row>
            <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo"></div>
            </h-col>
            <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo"></div>
            </h-col>
            <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo"></div>
            </h-col>
            <div class="demo"></div>
            <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
            </h-col>
            <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo"></div>
            </h-col>
            <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo"></div>
            </h-col>
        </h-row>
    </div>
</template>

<script>
    import Col from '../../../src/col.vue'
    import Row from '../../../src/row.vue'
    export default {
        name: "grid-demo-4",
        components: {
            'h-col':Col,
            'h-row':Row,
        }
    }
</script>

*{
box-sizing: border-box;
}
