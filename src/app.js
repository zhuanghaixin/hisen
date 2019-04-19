import Vue from 'vue';
import Button from './button';
Vue.component('g-button',Button)
console.log(Button);
new Vue({
    el:'#app',
    data:{
        msg:'sss'
    }
})