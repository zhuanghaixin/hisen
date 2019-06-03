<template>
    <div class="h-col" :class="colClass"
         :style="colStyle">
        <div style="border: 1px solid green;height: 100px">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "hisen-col",
        props: {
            span: {
                type: [Number, String],
                // default:12
            },
            offset: {
                type: [Number, String],
                // default:12
            },
            phone: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value)
                    let valid = true
                    keys.forEach((key) => {
                        if (!['span', 'offset'].includes(value)) {
                            valid = false
                        }
                    })
                    return valid
                }
            },
            ipad: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value)
                    let valid = true
                    keys.forEach((key) => {
                        if (!['span', 'offset'].includes(value)) {
                            valid = false
                        }
                    })
                    return valid
                }
            },
            narrowPc: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value)
                    let valid = true
                    keys.forEach((key) => {
                        if (!['span', 'offset'].includes(value)) {
                            valid = false
                        }
                    })
                    return valid
                }
            },
            pc: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value)
                    let valid = true
                    keys.forEach((key) => {
                        if (!['span', 'offset'].includes(value)) {
                            valid = false
                        }
                    })
                    return valid
                }
            },
            widePc: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value)
                    let valid = true
                    keys.forEach((key) => {
                        if (!['span', 'offset'].includes(value)) {
                            valid = false
                        }
                    })
                    return valid
                }
            },

        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset, phone,ipad,narrowPc,pc,widePc} = this
                let phoneClass = []
                let ipadClass=[]
                let narrowPcClass=[]
                let pcClass=[]
                let widePcClass=[]
                if (phone) {
                    phoneClass = [`col-phone-${phone.span}`]
                }
                if (ipad) {
                    ipadClass = [`col-ipad-${ipad.span}`]
                }
                if (narrowPc) {
                    narrowPcClass = [`col-narrow-pc-${narrowPc.span}`]
                }
                if (pc) {
                    pcClass = [`col-pc-${pc.span}`]
                }
                if (widePc) {
                    widePcClass = [`col-wide-pc-${widePc.span}`]
                }
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...phoneClass,
                    ...ipadClass,
                    ...narrowPcClass,
                    ...pcClass,
                    ...widePcClass

                ]

            },
            colStyle() {
                let {gutter} = this
                return {
                    paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    .h-col {
        height: 100px;
        width: 50%;
        /*background: #3D8FEE;*/
        /*padding: 0 10px;*/
        /*border: 1px solid red;*/
        $class-prefix: col-;

        // loops through 100 times
        @for $n from 1 through 24 {

            // for each $col_#{i}
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
                // set the background-color to cornflowerblue and
                // each time lighten the color slightly
                //background-color: darken(cornflowerblue, 0% + ($n / 2));
            }
        }
        $class-prefix: offset-;

        // loops through 100 times
        @for $n from 1 through 24 {

            // for each $col_#{i}
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
                // set the background-color to cornflowerblue and
                // each time lighten the color slightly
                //background-color: darken(cornflowerblue, 0% + ($n / 2));
            }
        }
        @media (max-width: 576px) {
            height: 100px;
            width: 50%;
            /*background: #3D8FEE;*/
            /*padding: 0 10px;*/
            /*border: 1px solid red;*/
            $class-prefix: col-phone-;

            // loops through 100 times
            @for $n from 1 through 24 {

                // for each $col_#{i}
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-;

            // loops through 100 times
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }

        }
        @media (min-width: 577px) {
            height: 100px;
            width: 50%;
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px) { // 770
            height: 100px;
            width: 50%;
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) { // 770
            height: 100px;
            width: 50%;
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

        @media (min-width: 1201px) {
            height: 100px;
            width: 50%;
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }

</style>