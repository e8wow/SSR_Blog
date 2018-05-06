<template>
    <div :class="prefixCls">
        <div :class="`${prefixCls}__wrap`">
            <header :class="`${prefixCls}__user`">
                <img :class="`${prefixCls}__logo`" src="../../static/images/avatar.jpg">
                <div :class="`${prefixCls}__nickname`">Jelf</div>
            </header>
            <navigation-list>
                <navigation-item>Home</navigation-item>
                <navigation-item active>Classification</navigation-item>
                <navigation-item>Tags</navigation-item>
                <navigation-item>Contact</navigation-item>
            </navigation-list>
        </div>
    </div>
</template>

<script>
    import NavigationList from './NavigationList'
    import NavigationItem from './NavigationListItem'

    const prefixCls = 'navigation'

    export default {
        name: prefixCls,
        components: {NavigationItem, NavigationList},
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
    @import "../../assets/styles/index";

    $navigationPrefixCls: 'navigation';
    .#{$navigationPrefixCls} {
        width: 35%;
        height: 100vh;
        display: flex;
        padding: 80px 0;
        background: linear-gradient(110deg, #1576DA, $color-primary);
        box-sizing: border-box;
        &__wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;
            color: #FFF;
        }
        &__user {
            padding: 0 80px;
            text-align: center;
        }
        &__logo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
        &__nickname {
            font-size: 35px;
            line-height: 2;
        }
    }
</style>
