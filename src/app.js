import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:true,
        loading3:true
    }
})



import chai from 'chai'
const expect=chai.expect
//单元测试
//gButton setting
{
    const Constructor = Vue.extend(Button)
    const gButton=new Constructor({
        propsData: {
            icon:'setting'
        }
    })

    gButton.$mount()
    let useElement=gButton.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    //清除button,防止内存占用
    gButton.$el.remove()
    gButton.$destroy
}
//gButton loading
{
    const Constructor = Vue.extend(Button)
    const gButton=new Constructor({
        propsData: {
            icon:'setting',
            loading:true
        }
    })

    gButton.$mount()
    let useElement=gButton.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    gButton.$el.remove()
    gButton.$destroy
}
//gButton icon是左还是右
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const gButton=new Constructor({
        propsData: {
            icon:'setting',
            iconPosition:'right'
        }
    })

    gButton.$mount(div)
    let svg=gButton.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svg)
    expect(order).to.eq("2")
    gButton.$el.remove()
    gButton.$destroy
}
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Button)
    const gButton=new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    gButton.$mount(div)
    gButton.$on('click',function () {
        expect(1).to.eq(2)
        console.log(111);
    })
    let button=gButton.$el

    button.click()
    console.log(button);
    // gButton.$el.remove()
    // gButton.$destroy
}
