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

    $articleItemPrefixCls: 'articleItem';
    .#{$articleItemPrefixCls} {
        margin: 35px;
        padding: 20px;
        box-shadow: 3px 3px 15px #999;
        &__title {
            margin-top: 0;
            font-weight: normal;
            text-decoration: none;
            color: #636363;
            transition: color 300ms ease-in-out;
            cursor: pointer;
            font-size: 32px;
            &:hover {
                color: #18CCB1;
            }
        }
        &__introduction {
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: normal;
            color: #828282;
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
                color: #828282;
                .icon-blog {
                    margin: 0 5px;
                }
                &:not(:last-child) {
                    margin-right: 20px;
                }
            }
        }
    }
</style>
