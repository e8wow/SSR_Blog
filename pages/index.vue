<template>
    <div :class="prefixCls">
        <article-list>
            <article-list-item v-for="i in 100" key="i" title="Article Title One"/>
        </article-list>
    </div>
</template>

<script>
    import articles from '../apollo/graphQL/articles'
    import {ArticleList, ArticleListItem} from '../components/ArticleList/index'

    export default {
        layout: 'main',
        components: {ArticleList, ArticleListItem},
        apollo: {
            articles: {
                query: articles,
                variables: {
                    page: 1,
                    limit: 10
                }
            }
        },
        data() {
            return {
                articles: []
            }
        },
        props: {
            prefixCls: {
                type: String,
                default: () => 'home'
            }
        },
        created() {
            console.log(this.$apollo.queries)
        }
    }
</script>

<style lang="scss">
    $homePrefixCls: 'home';
    .#{$homePrefixCls} {
    }
</style>
