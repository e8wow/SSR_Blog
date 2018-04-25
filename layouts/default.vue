<template>
    <div :class="prefixCls">
        <navigation/>
        <div :class="`${prefixCls}__container`">
            <nuxt/>
        </div>
    </div>
</template>

<script>
    import Navigation from '../components/Navigation/Navigation'

    const prefixCls = 'defaultLayout'
    export default {
        components: {Navigation},
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            }
        }
    }
</script>

<style lang="scss">
    $defaultLayoutPrefixCls: 'defaultLayout';
    .#{$defaultLayoutPrefixCls} {
        display: flex;
        &__container {
            flex: 1;
            max-height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
</style>
