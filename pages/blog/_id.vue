<template>
    <article :class="prefixCls">23</article>
</template>

<script>
    const prefixCls = 'blogDetail'

    export default {
        layout: 'main',
        name: prefixCls,
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            }
        },
        asyncData({$axios, params}) {
        }
    }
</script>

<style lang="scss">
    $blogDetailPrefixCls: 'blogDetail'
</style>
