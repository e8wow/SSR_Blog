<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = 'articleList'
    export default {
        name: 'ArticleList',
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            }
        }
    }
</script>

<style lang="scss">
    $articleListPrefixCls: 'articleList';
    .#{$articleListPrefixCls} {
        list-style-type: none;
        padding: 0;
    }
</style>
