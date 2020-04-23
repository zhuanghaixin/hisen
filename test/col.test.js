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
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                span:1
            }
        }).$mount(div)
        const element=vm.$el
        // console.log(element);
        expect(vm.$el.classList.contains('col-1')).to.eq(false)
        div.remove()
        vm.$destroy()
    })
    it('接收 span 属性', () => {
        const div=document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                offset:1
            }
        }).$mount(div)
        const element=vm.$el
        // console.log(element);
        expect(vm.$el.classList.contains('offset-1')).to.eq(false)
        div.remove()
        vm.$destroy()
    })
})

