<template>
    <li :class="prefixCls">
        <h2>
            <nuxt-link :class="`${prefixCls}__title`" to="/about">{{title}}</nuxt-link>
        </h2>
        <div :class="`${prefixCls}__introduction`">
            <strong :class="`${prefixCls}__introductionContent`">
                <h1>Title1</h1>
                <h2>Title2</h2>
                <h3>Title3</h3>
                <h4>Title4</h4>
                <h5>Title5</h5>
                <h6>Title6</h6>
            </strong>
            <div :class="`${prefixCls}__introductionImage`">
                <img src="https://cn.vuejs.org/images/logo.png" alt="">
            </div>
        </div>
        <ul :class="`${prefixCls}__operation`">
            <li :class="`${prefixCls}__operationItem`">
                <icon icon="blog-praise" size="20" svg color="#F00"/>
                <var>1</var>
            </li>
            <li :class="`${prefixCls}__operationItem`">
                <icon icon="blog-eye" size="20" svg color="#1576DA"/>
                <var>100</var>
            </li>
            <li :class="`${prefixCls}__operationItem`">
                <icon icon="blog-comment" size="20" svg color="#18CCB1"/>
                <var>100</var>
            </li>
        </ul>
    </li>
</template>

<script>
    const prefixCls = 'articleItem'
    export default {
        name: 'articleItem',
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            },
            title: {
                type: String,
                required: true
            },
            introduction: String
        }
    }
</script>

<style lang="scss">
    @import "../../assets/styles/index";

    $articleItemPrefixCls: 'articleItem';
    .#{$articleItemPrefixCls} {
        margin: 35px;
        padding: 20px;
        box-shadow: 3px 3px 15px $article-item-box-shadow-color;
        &__title {
            margin-top: 0;
            font-weight: normal;
            text-decoration: none;
            color: $article-item-title-color;
            transition: color 300ms ease-in-out;
            cursor: pointer;
            font-size: 32px;
            &:hover {
                color: $color-primary;
            }
        }
        &__introduction {
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: normal;
            color: $article-item-introduction-default-color;
        }
        &__introductionImage {
            margin-left: 40px;
            img {
                max-width: 250px;
            }
        }
        &__operation {
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 25px 0 0;
            &Item { // __operationItem
                display: flex;
                align-items: center;
                font-size: 14px;
                cursor: pointer;
                color: $article-item-operation-color;
                margin-right: 20px;
                .icon-blog {
                    margin: 0 5px;
                }
                var {
                    font-style: normal;
                    margin-left: 8px;
                }
            }
        }
    }
</style>
