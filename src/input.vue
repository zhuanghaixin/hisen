<template>
    <div class="wrapper" :class="{'error':error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
               @change="handleChange"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"


        >
        <template v-if="error">
            <g-icon name="error" class="icon-error"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: "hisen-input",
        components: {
            'g-icon': Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }

        },
        data() {
            return {
                values: ''
            }
        },
        methods: {
            handleChange() {
                this.$emit('change', event.target.value)
            },
            handleInput() {
                this.$emit('input', event.target.value)

            },
            handleFocus() {
                this.$emit('focus', event.target.value)
            },
            handleBlur() {
                this.$emit('blur', event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>

    $font-size: 14px;
    $height: 32px;
    $width: 128px;
    $border-color: #999;
    $border-radius: 4px;
    $border-color-hover: #666;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: $height;
            width: $width;
            padding: 0 8px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            font-size: inherit;
            outline: none;

            &:hover {
                border-color: $border-color-hover
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }

            &[disabled], &[readonly] {
                color: #333;
                border-color: #333;
                background-color: #eeee;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
            }
        }

        .icon-error {
            fill: red;
        }

        .errorMessage {
            color: red;
        }

    }
</style>