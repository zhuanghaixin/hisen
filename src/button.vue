<template>

    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <!--<svg  v-if="icon" class="icon" aria-hidden="true">-->
            <!--<use :xlink:href=`#icon-${icon}`></use>-->
        <!--</svg>-->
        <g-icon v-if="icon" :name="icon" class="icon"></g-icon>
        <g-icon class="loading" name="loading"></g-icon>
        <div class="content">
        <slot></slot>
        </div>
    </button>

</template>

<script>
    export default {
        name: "btn",
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    console.log(value);
                    return value === 'left' || value === 'right' ;
                }
            }}
    }
</script>

<style lang="scss">
    @keyframes btn-spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: var(--font-size);height: var(--button-height);padding: 0 1em;border-radius: var(--border-radius);border: 1px solid var(--border-color);   background: var(--button-bg);
        //flex布局
        display: inline-flex;justify-content: center;align-items: center;
        //文本对不齐
        vertical-align: top;
     //按钮状态
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        //默认icon位置
        >.icon{
            order: 1;
            margin-right: .3em;
        }
        >.content{
            order:2;
        }
        //icon-right位置
        &.icon-right{
            >.icon{
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            >.content{
                order:1;
            }
        }
        //圆圈加载
        .loading{
            animation: btn-spin 2s infinite linear;
        }



    }

</style>