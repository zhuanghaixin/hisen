import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import  Input from './input'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
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
            console.log(e.target.value)
        }
    }
})


