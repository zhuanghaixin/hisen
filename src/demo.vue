<template>
    <div style="padding-top:100px;padding-left:100px">
        <!--        Popover-->
        <h-popover>
            <template v-slot:content>
                <div>popover 内容</div>
            </template>
            <button>点我</button>
        </h-popover>
        <!--        Popover-->
        <h-popover>
            <template v-slot:content>
                <div>popover 内容</div>
            </template>
            <button>点我</button>
        </h-popover>
        <!--        <div ref="popover"></div>-->
        <!--        <button v-popover="$refs.popover"></button>-->


        <!-- Tabs-->
        <!--     <h-tabs :selected.sync="selectedTab" @update:selected="yyy">-->
        <!--         <h-tabs-head class="frank">-->
        <!--             <template v-slot:actions>-->
        <!--                 <button>设置</button>-->
        <!--             </template>-->
        <!--             <h-tabs-item name="woman">-->
        <!--                 <h-icon name="setting"></h-icon>-->
        <!--                 美女</h-tabs-item>-->
        <!--             <h-tabs-item name="fiance" disabled>财经</h-tabs-item>-->
        <!--             <h-tabs-item name="sports">体育</h-tabs-item>-->
        <!--         </h-tabs-head>-->
        <!--         <h-tabs-body>-->
        <!--             <h-tabs-pane name="woman">美女咨询</h-tabs-pane>-->
        <!--             <h-tabs-pane name="fiance">财经咨询</h-tabs-pane>-->
        <!--             <h-tabs-pane name="sports">体育咨询</h-tabs-pane>-->
        <!--         </h-tabs-body>-->
        <!--     </h-tabs>-->
        <!--        <h-button @change="$toast('点击弹出提示',{autoClose:50})">上方弹出</h-button>-->
        <!--        <h-button @change="$toast('点击弹出提示', {position:'middle'})">中间弹出</h-button>-->
        <!--        <h-button @change="$toast('点击弹出提示', {position:'bottom'})">下方弹出</h-button>-->
        <!--    上中下布局-->
        <!--            <h-layout style="height:100vh">-->
        <!--                <h-header class="demo">Header</h-header>-->
        <!--                <h-content class="demo">Content</h-content>-->
        <!--                <h-footer class="demo">Footer</h-footer>-->
        <!--            </h-layout>-->
        <!--    sider布局-->
        <!--            <h-layout style="height:100vh">-->
        <!--                <h-header class="demo">Header</h-header>-->
        <!--                <h-layout>-->
        <!--                    <h-sider class="demo">Sider</h-sider>-->
        <!--                    <h-content class="demo">Content</h-content>-->
        <!--                </h-layout>-->
        <!--                <h-footer class="demo">Footer</h-footer>-->
        <!--            </h-layout>-->
        <!--    sider布局 放外面-->
        <!--    <h-layout style="height:100vh">-->
        <!--        <h-sider class="demo">Sider</h-sider>-->
        <!--        <h-layout class="demo">-->
        <!--            <h-header class="demo">Header</h-header>-->

        <!--            <h-content class="demo">Content</h-content>-->
        <!--            <h-footer class="demo">Footer</h-footer>-->
        <!--        </h-layout>-->

        <!--    </h-layout>-->
        <!--            <h-row>-->
        <!--                <h-col span="23" offset="1" :narrow-pc="{span:12,offset:12 }">-->
        <!--                    <div class="demo"></div>-->
        <!--                </h-col>-->
        <!--            </h-row>-->
        <!--            <h-row>-->
        <!--                <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
        <!--                    <div class="demo"></div>-->
        <!--                </h-col>-->
        <!--                <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
        <!--                    <div class="demo"></div>-->
        <!--                </h-col>-->
        <!--                <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
        <!--                    <div class="demo"></div>-->
        <!--                </h-col>-->
        <!--                <div class="demo"></div>-->
        <!--                <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
        <!--                </h-col>-->
        <!--                <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
        <!--                    <div class="demo"></div>-->
        <!--                </h-col>-->
        <!--                <h-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
        <!--                    <div class="demo"></div>-->
        <!--                </h-col>-->
        <!--            </h-row>-->
        <!--            <div class="box" style="border: 1px solid black">-->
        <!--                <h-row gutter="20">-->
        <!--                    <h-col span="12"-->
        <!--                           :ipad="{span:8}"-->
        <!--                           :narrow-pc="{span:4}"-->
        <!--                           :pc="{span:2}"-->
        <!--                           :wide-pc="{span:1}"-->
        <!--                    >-->
        <!--                        2-->
        <!--                    </h-col>-->
        <!--                    <h-col span="12"-->
        <!--                           :ipad="{'span':16}"-->
        <!--                           :narrow-pc="{span:20}"-->
        <!--                           :pc="{span:22}"-->
        <!--                           :wide-pc="{span:23}"-->
        <!--                    >2-->
        <!--                        2-->
        <!--                    </h-col>-->
        <!--                </h-row>-->
        <!--                <h-row>-->
        <!--                    <h-col>12</h-col>-->
        <!--                    <h-col>12</h-col>-->
        <!--                </h-row>-->
        <!--                <h-row>-->
        <!--                    <h-col>8</h-col>-->
        <!--                    <h-col>8</h-col>-->
        <!--                    <h-col>8</h-col>-->
        <!--                </h-row>-->
        <!--                <h-row>-->
        <!--                    <h-col>6</h-col>-->
        <!--                    <h-col>6</h-col>-->
        <!--                    <h-col>6</h-col>-->
        <!--                    <h-col>6</h-col>-->
        <!--                </h-row>-->
        <!--                <h-row>-->
        <!--                    <h-col span="2">2</h-col>-->
        <!--                    <h-col span="22">22</h-col>-->
        <!--                </h-row>-->
        <!--                <h-row>-->
        <!--                    <h-col span="1">2</h-col>-->
        <!--                    <h-col span="20" offset="3">20</h-col>-->
        <!--                </h-row>-->
        <!--                <h-row>-->
        <!--                    <h-col span="3">3</h-col>-->
        <!--                    <h-col span=9 offset="1">9</h-col>-->
        <!--                    <h-col span="10" offset="1">10</h-col>-->
        <!--                </h-row>-->
        <!--                <h-row gutter="20">-->
        <!--                    <h-col>8</h-col>-->
        <!--                    <h-col>8</h-col>-->
        <!--                    <h-col>8</h-col>-->
        <!--                </h-row>-->
        <!--                <h-row gutter="40">-->
        <!--                    <h-col>12</h-col>-->
        <!--                    <h-col>12</h-col>-->
        <!--                </h-row>-->
        <!--            </div>-->
        <!--            <div class="box">-->
        <!--                <h-input value="正常状态"></h-input>-->
        <!--                <h-input value="禁止状态" :disabled="true"></h-input>-->
        <!--                <h-input value="只读状态" :readonly="true"></h-input>-->
        <!--                <h-input value="xx" v-model="message"></h-input>-->
        <!--                <p>{{message}}</p>-->
        <!--            </div>-->
        <!--        &lt;!&ndash;    Input&ndash;&gt;-->
        <!--            <div class="box">-->
        <!--                <h-input :value="values" :error="error" @change="inputChange"></h-input>-->
        <!--            </div>-->
        <!--        &lt;!&ndash;    Button&ndash;&gt;-->
        <!--            <div class="box">-->
        <!--                <h-button :loading="loading1" @change="loading1=!loading1">-->
        <!--                    设置-->
        <!--                </h-button>-->
        <!--                <h-button icon="setting" icon-position="left" :loading="loading2" @change="loading2=!loading2">-->
        <!--                    设置-->
        <!--                </h-button>-->
        <!--                <h-button icon="setting" icon-position="right" :loading="loading3" @change="loading3=!loading3">-->
        <!--                    设置-->
        <!--                </h-button>-->
        <!--                <h-button-group>-->
        <!--                    <h-button icon="left">上一页</h-button>-->
        <!--                    <h-button>更多</h-button>-->
        <!--                    <h-button icon="right" icon-position="right">下一页</h-button>-->
        <!--                </h-button-group>-->
        <!--            </div>-->
    </div>
</template>

<script>
    import plugin from './plugin'
    import Button from './button';
    import Icon from './icon';
    import Input from './input'
    import ButtonGroup from './button-group'
    import Row from './row'
    import Col from './col'
    import Layout from './layout'
    import Sider from './sider'
    import Header from './header'
    import Footer from './footer'
    import Content from './content'
    import Toast from './toast.vue'
    import Vue from 'vue'

    Vue.use(plugin)
    import Tabs from './tabs.vue'
    import TabsHead from './tabs-head'
    import TabsBody from './tabs-body'
    import TabsItem from './tabs-item'
    import TabsPane from './tabs-pane'
    import Popover from './popover'

    export default {
        name: "demo",
        components: {
            'h-button': Button,
            'h-icon': Icon,
            'h-button-group': ButtonGroup,
            'h-input': Input,
            'h-row': Row,
            'h-col': Col,
            'h-layout': Layout,
            'h-sider': Sider,
            'h-footer': Footer,
            'h-content': Content,
            'h-tabs': Tabs,
            'h-tabs-head': TabsHead,
            'h-tabs-body': TabsBody,
            'h-tabs-item': TabsItem,
            'h-tabs-pane': TabsPane,
            'h-popover': Popover
        },
        data() {
            return {
                loading1: true,
                loading2: true,
                loading3: true,
                message: '',
                error: '姓名不能少于两个字',
                values: '张三',
                selectedTab: 'sports'
            }

        },

        methods: {
            yyy(data) {
                console.log(data)
            },
            inputChange: function (e) {
                if (e.length >= 3) {
                    this.values = e
                    this.error = ''
                } else {
                    this.values = e
                    this.error = '姓名不能少于两个字'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }


    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: red;
    }

    #app {
        /*margin: 20px;*/
    }

    body {
        font-size: var(--font-size);
    }

    .box {
        margin: 20px;
    }

    .demo {
        /*border:1px solid #666;*/
        min-height: 100px;
    }

    .sider {
        background: #d5dce5;
        width: 200px;
    }

    .header {
        background: #b5c0cf;
        height: 100px;
    }

    .content {
        background: #eaeef2;
    }

    .footer {
        background: #ccc;
        height: 50px;
    }

</style>
