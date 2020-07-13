<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HisenToast"
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,0.74);
    $toast-color:#fff;
    .toast{
        /*border:1px solid red;*/
        position:fixed;
        top:0;
        left:50%;
        height: $toast-height;
        transform:translateX(-50%);
        font-size:$font-size;
        line-height: 1.8;
        display:flex;
        align-items:center;
        background:$toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
        color:$toast-color;
    }
</style>
