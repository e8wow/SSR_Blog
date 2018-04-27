<template>
    <li :class="prefixCls">
        <h2>
            <nuxt-link :class="`${prefixCls}__title`" to="/about">{{title}}</nuxt-link>
        </h2>
        <div :class="`${prefixCls}__introduction`">
            <strong :class="`${prefixCls}__introductionContent`">
            </strong>
            <div :class="`${prefixCls}__introductionImage`">
                <img src="https://cn.vuejs.org/images/logo.png" alt="">
            </div>
        </div>
        <ul :class="`${prefixCls}__operation`">
            <li :class="`${prefixCls}__operationItem`">
                <icon icon="blog-praise" size="20" svg color="#F00"/>
                1
            </li>
            <li :class="`${prefixCls}__operationItem`">
                <icon icon="blog-comment" size="20" svg color="#18CCB1"/>
                100
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
