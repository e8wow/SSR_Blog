<template>
    <div :class="prefixCls">
        <article-list>
            <article-list-item v-for="i in 100" key="i" title="Article Title One"/>
        </article-list>
    </div>
</template>

<script>
    import {ArticleList, ArticleListItem} from '../components/ArticleList/index'

    export default {
        components: {ArticleList, ArticleListItem},
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
