<template>
    <div class="h-col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "hisen-col",
        props:{
            span:{
                type:[Number,String],
                // default:12
            }
        }
    }
</script>

<style scoped lang="scss">
.h-col{
    height: 100px;
    width: 50%;
    background: #3D8FEE;
    border: 1px solid red;
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
}


</style>