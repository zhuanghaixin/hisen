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
import spies from 'chai-spies'
chai.use(spies)
//单元测试
//vm setting
{
    const Constructor = Vue.extend(Button)
    const vm=new Constructor({
        propsData: {
            icon:'setting'
        }
    })

    vm.$mount()
    let useElement=vm.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    //清除button,防止内存占用
    vm.$el.remove()
    vm.$destroy
}
//vm loading
{
    const Constructor = Vue.extend(Button)
    const vm=new Constructor({
        propsData: {
            icon:'setting',
            loading:true
        }
    })

    vm.$mount()
    let useElement=vm.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy
}
//vm icon是左还是右
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm=new Constructor({
        propsData: {
            icon:'setting',
            iconPosition:'right'
        }
    })

    vm.$mount(div)
    let svg=vm.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svg)
    expect(order).to.eq("2")
    vm.$el.remove()
    vm.$destroy
}
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm=new Constructor({
        propsData: {
            icon:'setting',
            iconPosition:'left'
        }
    })

    vm.$mount(div)
    let svg=vm.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svg)
    expect(order).to.eq("1")
    vm.$el.remove()
    vm.$destroy
}

//mock
//chai spies
{

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})

    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}
