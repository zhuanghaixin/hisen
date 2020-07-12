<template>
    <div style="padding-top: 16px;">
            <h-layout style="height:100vh">
                <h-header class="demo">Header</h-header>
                <h-content class="demo">Content</h-content>
                <h-footer class="demo">Footer</h-footer>
            </h-layout>
    </div>
</template>

<script>
    import Layout from '../../../src/layout.vue'
    import Sider from '../../../src/Sider.vue'
    import Footer from '../../../src/Footer.vue'
    import Header from '../../../src/Header.vue'
    import Content from '../../../src/Content.vue'

    export default {
        name: "layout-demo-1",
        components: {
            'h-layout': Layout,
            'h-sider': Sider,
            'h-header': Header,
            'h-footer': Footer,
            'h-content': Content
        }
    }
</script>

<style scoped lang="scss">
    .demo{
        /*border:1px solid #666;*/
        min-height:100px;
    }
    .sider {
        background: #d5dce5;
        width: 200px;
    }
    .header{
        background:#b5c0cf;
        height: 100px;
    }
    .content{
        background:#eaeef2;
    }
    .footer{
        background:#ccc;
        height: 50px;
    }
</style>
