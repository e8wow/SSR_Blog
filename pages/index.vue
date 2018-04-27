<template>
    <div :class="prefixCls">
        <article-list>
            <article-list-item title="How to be an effective web developer" subTitle=""/>
            <article-list-item title="How to be an effective web developer" subTitle=""/>
            <article-list-item title="How to be an effective web developer" subTitle=""/>
            <article-list-item title="How to be an effective web developer" subTitle=""/>
            <article-list-item title="How to be an effective web developer" subTitle=""/>
            <article-list-item title="How to be an effective web developer" subTitle=""/>
            <article-list-item title="How to be an effective web developer" subTitle=""/>
            <article-list-item title="How to be an effective web developer" subTitle=""/>
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
