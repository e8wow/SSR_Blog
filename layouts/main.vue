<template>
    <div :class="prefixCls">
        <div :class="`${prefixCls}__container`">
            <profile>
                <navigation-list>
                    <navigation-list-item>Home</navigation-list-item>
                    <navigation-list-item active>Classification</navigation-list-item>
                    <navigation-list-item>Tags</navigation-list-item>
                    <navigation-list-item>Contact</navigation-list-item>
                </navigation-list>
            </profile>
            <main :class="`${prefixCls}__main`">
                <nuxt/>
            </main>
        </div>
    </div>
</template>

<script>
    import Profile from '../components/Profile'
    import {NavigationList, NavigationListItem} from '../components/Navigation/index'

    const prefixCls = 'mainLayout'
    export default {
        components: {
            Profile,
            NavigationList,
            NavigationListItem
        },
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            }
        }
    }
</script>

<style lang="scss">
    $mainLayoutPrefixCls: 'mainLayout';
    .#{$mainLayoutPrefixCls} {
        &__container {
            flex: 1;
            max-height: 100vh;
            display: flex;
        }
        &__main {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
</style>
