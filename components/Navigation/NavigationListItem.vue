<template>
    <nuxt-link :to="to" :class="rootClasss">
        <slot></slot>
    </nuxt-link>
</template>

<script>
    const prefixCls = 'navigationItem';

    export default {
        name: prefixCls,
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            },
            to: {
                type: [String, Object],
                default: () => ''
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
        transition: color 300ms ease-in-out;
        font-size: 16px;
        display: block;
        &-active {
            color: $color-primary;
            background-color: #FFF;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            box-shadow: 0 0 50px #FFF;
        }
        &:hover {
            color: $color-primary-active;
        }
    }
</style>
