<template>
    <div :class="prefixCls">
    </div>
</template>

<script>
    export default {
        props: {
            prefixCls: {
                type: String,
                default: () => 'home'
            }
        }
    }
</script>

<style lang="scss">
    $homePrefixCls: 'home';
    .#{$homePrefixCls} {
    }
</style>
