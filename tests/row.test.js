const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('接收gutter属性.', (done) => {
        Vue.component('h-row',Row)
        Vue.component('h-col',Col)
        const div=document.createElement('div')
        document.body.append(div)
       div.innerHTML=`
       <h-row gutter="20">
       <h-col span="12"></h-col>
       <h-col span="12"></h-col>
</h-row>
       `

        const vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            console.log(vm.$el.outerHTML)
            const row=vm.$el.querySelector('.h-row')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            const cols=vm.$el.querySelectorAll('.h-col')
            console.log(cols[0])
            console.log(cols[1])
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)

    })
    it('接收aligin属性', () => {
        const div=document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
               align:'right'
            }
        }).$mount(div)
      const element=vm.$el
        // console.log(element);
        expect(getComputedStyle(element).justifyContent).to.eq('flex-end')  //需要将div挂载到页面上，才能显示
        console.log(vm.$el)
        vm.$el.remove()
        vm.$destroy()
    })
})

