<template>
    <li :class="navigationItemClasss">
        <nuxt-link :class="`${prefixCls}__link`" :to="to">
            <slot></slot>
        </nuxt-link>
    </li>
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
            to: {
                type: [String, Object],
                default: () => ''
            },
            active: Boolean
        },
        computed: {
            navigationItemClasss() {
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
        cursor: pointer;
        font-size: 16px;
        .#{$navigationPrefixCls}__link {
            display: block;
            color: #FFF;
            transition: color 300ms ease-in-out;
            padding-left: 20px;
        }
        &-active {
            background-color: #FFF;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            box-shadow: 0 0 50px #FFF;
            .#{$navigationPrefixCls}__link {
                color: $color-primary;
            }
        }
        &:hover .#{$navigationPrefixCls}__link {
            color: $color-primary-active;
        }
    }
</style>
