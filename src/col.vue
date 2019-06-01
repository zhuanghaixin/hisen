<template>
    <div class="h-col" :class=""
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
            }

        },
        data(){
            return{
                gutter:0
            }
        },
        computed:{
            colClass(){
                let {span,offset}=this
                return [
                    span && `col-${span}`,offset && `offset-${offset}`]

            },
            colStyle(){
                return {
                    paddingLeft:this.gutter/2+'px',paddingRight:this.gutter/2+'px'
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
    }


</style>