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
                    autoClose: true,
                    autoCloseDelay:1
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
    })

})

