<template>
    <nav :class="prefixCls">
        <ul :class="`${prefixCls}__container`">
            <slot></slot>
        </ul>
    </nav>
</template>

<script>
    const prefixCls = 'navigationList'

    export default {
        name: prefixCls,
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/styles/index";

    $navigationPrefixCls: 'navigationList';
    .#{$navigationPrefixCls} {
        width: 200px;
        &__container {
            list-style-type: none;
        }
    }
</style>
