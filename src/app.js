import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import  Input from './input'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'


Vue.component('h-button', Button)
Vue.component('h-icon', Icon)
Vue.component('h-button-group', ButtonGroup)
Vue.component('h-input',Input)
Vue.component('h-row',Row)
Vue.component('h-col',Col)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true,
        message:''
    },
    created(){
        setTimeout(()=>{
            let event = new Event('change');
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            console.log('hi')
        },3000)
    },
    methods:{
        inputChange:function (e) {
            console.log(e)
        }
    }
})


