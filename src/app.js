import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import  Input from './input'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Toast from './toast.vue'
import plugin from './plugin'

Vue.component('h-button', Button)
Vue.component('h-icon', Icon)
Vue.component('h-button-group', ButtonGroup)
Vue.component('h-input',Input)
Vue.component('h-row',Row)
Vue.component('h-col',Col)
Vue.component('h-layout',Layout)
Vue.component('h-sider',Sider)
Vue.component('h-footer',Footer)
Vue.component('h-content',Content)
Vue.component('h-header',Header)
Vue.component('h-toast',Toast)
Vue.use(plugin)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true,
        message:''
    },
    created(){
        // this.$toast('我是message')
        setTimeout(()=>{
            let event = new Event('change');
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            console.log('hi')
        },3000)
    },

    methods:{
        showToast(){
            this.$toast('很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字watching',
                {
                    closeButton:{
                        text:'知道了',
                        callback(toast){
                            console.log(toast)
                            toast.log()
                            console.log('用户知道了')
                        }
                    }
            }
            )
        },
        inputChange:function (e) {
            console.log(e)
        }
    }
})


