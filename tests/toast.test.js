const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props',function(){
        //异步 所以加个done
        it('接受autoClose',(done)=>{
            const div=document.createElement('div')
            document.body.append(div)
            const Constructor=Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    autoClose: 1,
                }
            }).$mount(div)
            //1.5秒中之后，期待toast组件不在body中（因为自动关闭）
            // setTimeout(()=>{
            //     console.log('document.body.contains(vm.$el)')
            //     console.log(document.body.contains(vm.$el))
            //     expect(document.body.contains(vm.$el)).to.eq(false)
            //     done()
            // },1500)

            //     [优化] 测试toast关闭以后body中不含有toast组件
            vm.$on('close',()=>{
                    expect(document.body.contains(vm.$el)).to.eq(false)
                    done()
            })
        })
        it('接受 closeButton',()=>{
            const callback = sinon.fake();
            const div=document.createElement('div')
            document.body.append(div)
            const Constructor=Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    closeButton:{
                        text:'关闭吧',
                        callback

                    }
                }
            }).$mount(div)
            console.log(vm.$el.outerHTML)
            let closeButton=vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接受 enableHtml',()=>{
            const Constructor=Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{enableHtml:true}
            })
            vm.$slots.default=['<strong id="test">Hi</strong>']
            vm.$mount()
            console.log(vm.$el.outerHTML)
            let strong=vm.$el.querySelector('#test')
            expect(strong).to.be.ok
            console.log(1111111)
        })
        it('接受 position',()=>{
            const Constructor=Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{position:'bottom'}
            })
            vm.$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.equal(true)
            console.log(1111111)
        })
    })

})

