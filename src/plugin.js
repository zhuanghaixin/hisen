import Toast from './toast'

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            console.log(currentToast)
            if (currentToast) {
                console.log(11111)
                currentToast.close()
            }
            currentToast = createToast(
                {
                    Vue,
                    message,
                    propsData: toastOptions,
                    onClose:()=>{
                        currentToast=null
                    }
                }
            )

        }
    }
}

//  新建一个Toast
function createToast({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}
