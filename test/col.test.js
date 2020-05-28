import Row from "../src/row";

const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })
    it('接收 span 属性', () => {
        const div=document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span:1
            }
        }).$mount(div)
        const element=vm.$el
        console.log(111111111111111)
        console.log(element);
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset', () => {
        const div=document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset:1
            }
        }).$mount(div)
        const element=vm.$el
        console.log(2222222222)
        console.log(element);
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性', () => {
        const div=document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
               pc:{span:1,offset:2}
            }
        }).$mount(div)
        const element=vm.$el
        console.log(33333333)
        console.log(element);
        expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})

