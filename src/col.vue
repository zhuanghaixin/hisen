<template>
    <div class="h-col" :class="colClass"
         :style="colStyle">
        <div style="border: 1px solid green;height: 100px">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
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
            ipad: {
                type: Object,
                validator
            },
            narrowPc: {
                type: Object,
                validator
            },
            pc: {
                type: Object,
                validator
            },
            widePc: {
                type: Object,
                validator
            },

        },
        data() {
            return {
                gutter: 0
            }
        },
        methods:{
            createClasses(obj,str=''){
                if(!obj){
                    return []
                }
                //obj {span:12,offset:2}
                //str ipad-,pc-,narrowPc-
                let array = []
                if (obj.span) {
                    array.push(`col-${str}${obj.span}`)
                }
                if (obj.offset) {
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
        },
        computed: {
            colClass() {
                let {span, offset, ipad, narrowPc, pc, widePc} = this

                return [
                    ...this.createClasses({span,offset}),
                    ...this.createClasses(ipad,'ipad-'),
                    ...this.createClasses(narrowPc,'narrowPc-'),
                    ...this.createClasses(pc,'pc-'),
                    ...this.createClasses(widePc,'widePc-'),
                ]

                // span && `col-${span}`,
                // offset && `offset-${offset}`,
                // ...(ipad?[`col-ipad-${ipad.span}`]:[]),
                // ...(narrowPc?[`col-narrow-pc-${narrowPc.span}`]:[]),
                // ...(pc?[`col-pc-${pc.span}`]:[]),
                // ...(widePc?[`col-wide-pc-${widePc.span}`]:[])


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