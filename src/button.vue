<template>

    <button class="h-button" :class="{[`icon-${iconPosition}`]:true}"
            @click="handleLoading">
        <!--<svg  v-if="icon" class="icon" aria-hidden="true">-->
        <!--<use :xlink:href=`#icon-${icon}`></use>-->
        <!--</svg>-->
        <h-icon v-if="icon &&!loading" :name="icon" class="icon"></h-icon>
        <h-icon class="loading icon" name="loading" v-if="loading"></h-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>

</template>

<script>
    import Icon from './icon'

    export default {
        name: "hisen-button",
        components: {
            'h-icon': Icon
        },
        props: {
            icon: {},
            iconPosition: {

                type: String,
                default: 'left',
                validator(value) {
                    // console.log(value);
                    return value === 'left' || value === 'right';
                }
            },
            loading: {
                type: Boolean
            }
        },
        methods: {
            handleLoading() {
                this.$emit('change')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes btn-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .h-button {
        //使用scss
        $font-size:14px;
        $button-height:32px;
        $button-bg:whte;
        $button-active-bg:#eee;
        $border-radius:4px;
        $color:#333;
        $border-color:#999;
        $border-color-hover:#666;


        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        //flex布局
        display: inline-flex;
        justify-content: center;
        align-items: center;
        //文本对不齐
        vertical-align: top;
        //按钮状态
        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        //默认icon位置
        > .icon {
            order: 1;
            margin-right: .3em;
        }

        > .content {
            order: 2;
        }

        //icon-right位置
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }

            > .content {
                order: 1;
            }
        }

        //圆圈加载
        .loading {
            animation: btn-spin 2s infinite linear;
        }

    }

</style>
