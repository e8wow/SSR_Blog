<template>
    <div :class="rootClasss">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = 'navigationItem'

    export default {
        name: prefixCls,
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            },
            active: Boolean
        },
        computed: {
            rootClasss() {
                return [
                    this.prefixCls,
                    {[`${this.prefixCls}-active`]: this.active}
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/styles/index";

    $navigationPrefixCls: 'navigationItem';
    .#{$navigationPrefixCls} {
        line-height: 3.5;
        padding-left: 20px;
        color: #FFF;
        cursor: pointer;
        &-active {
            color: #18CCB1;
            background-color: #FFF;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }
    }
</style>
