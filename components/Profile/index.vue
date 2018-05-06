<template>
    <aside :class="prefixCls">
        <div :class="`${prefixCls}__wrap`">
            <header :class="`${prefixCls}__user`">
                <img :class="`${prefixCls}__logo`" src="../../static/images/avatar.jpg">
                <div :class="`${prefixCls}__nickname`">Jelf</div>
            </header>
            <slot/>
        </div>
    </aside>
</template>

<script>
    const prefixCls = 'profile'
    export default {
        name: prefixCls,
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/styles/index";

    $profilePrefixCls: 'profile';
    .#{$profilePrefixCls} {
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
