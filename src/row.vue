<template>
    <div class="h-row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HisenRow",
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator(value) {
                    return ['left', 'right', 'center'].indexOf(value)!==-1
                }
            }

        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {
                    marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'
                }
            },
            rowClass() {
                let {align} = this
                return [align && `align-${align}`]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style scoped lang="scss">
    .h-row {
        display: flex;
        flex-wrap: wrap;
        &.align-left {
            justify-content: flex-start;
        }

        &.align-center {
            justify-content: center;
        }

        &.align-right {
            justify-content: flex-end;
        }
    }
</style>
