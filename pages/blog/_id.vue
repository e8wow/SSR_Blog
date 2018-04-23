<template>
    <div :class="prefixCls">23</div>
</template>

<script>
    const prefixCls = 'blogDetail'

    export default {
        name: prefixCls,
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            }
        },
        asyncData({$axios, params}) {
            console.log(params)
        }
    }
</script>

<style lang="scss">
    $blogDetailPrefixCls: 'blogDetail'
</style>
