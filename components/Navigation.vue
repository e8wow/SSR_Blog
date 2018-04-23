<template>
    <div :class="prefixCls">
        <img :class="`${prefixCls}__logo`" src="../static/images/avatar.jpg" alt="jelf avatar">
        <div :class="`${prefixCls}__nickname`">Jelf</div>
        <div :class="`${prefixCls}__search`">
            <el-autocomplete
                class="inline-input"
                size="small"
                v-model="searchText"
                placeholder="请输入内容"
                @select="handleSelect"
            ></el-autocomplete>
        </div>
    </div>
</template>

<script>
    const prefixCls = 'navigation'

    export default {
        name: prefixCls,
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            }
        },
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            handleSelect() {
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/styles/index";

    $navigationPrefixCls: 'navigation';
    .#{$navigationPrefixCls} {
        width: 300px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        background: linear-gradient(135deg, #3c88d6, #5DD6C4);
        &__logo {
            width: 80px;
            height: 80px;
            margin: 30px 0;
            border-radius: 50%;
        }
        &__search {
            margin: 30px 0;
        }
    }
</style>
