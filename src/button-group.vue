<template>
    <div class="h-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "hisen-button-group",
        mounted() {
            console.log(this.$el.children);
            for (let node of this.$el.children) {
                if (node.nodeName.toLowerCase() !== 'button') {
                    console.warn(`h-button-group的子元素应该是g-button,而你的子元素是${node.nodeName.toLowerCase()}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .h-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .h-button {
            border-radius: 0px;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                 z-index: 1;
            }
        }

    }

</style>