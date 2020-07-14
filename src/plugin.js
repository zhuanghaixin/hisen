import Toast from './toast'

let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast=function(message,toastOptions){
            if(currentToast){
                currentToast.close()
            }
                currentToast= createToast({Vue,message,propsData:toastOptions})
                console.log(currentToast)
        }
    }
}

//  新建一个Toast
function createToast({Vue,message,propsData}){
    let Constructor=Vue.extend(Toast)
    let toast=new Constructor({
        propsData
    })
    toast.$slots.default=[message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return  toast
}
