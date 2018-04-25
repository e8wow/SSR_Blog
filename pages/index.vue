<template>
    <div :class="prefixCls">
        <ul>
            <li>
                <span>OCTOBER 12, 2016</span>
                <h1>How to be an effective web developer</h1>
                <h2>How two simple exercises changed my life</h2>
            </li>
            <li>
                <span>OCTOBER 12, 2016</span>
                <h1>Vue源码解析（第一章）</h1>
                <h2>Vue.init...</h2>
            </li>
            <li>
                <span>OCTOBER 12, 2016</span>
                <h1>Vue源码解析（第二章）</h1>
                <h2>Vue.init...</h2>
            </li>
            <li>
                <span>OCTOBER 12, 2016</span>
                <h1>Vue源码解析（第三章）</h1>
                <h2>Vue.init...</h2>
            </li>
            <li>
                <span>OCTOBER 12, 2016</span>
                <h1>Vue源码解析（第四章）</h1>
                <h2>Vue.init...</h2>
            </li>
            <li>
                <span>OCTOBER 12, 2016</span>
                <h1>Vue源码解析（第五章）</h1>
                <h2>Vue.init...</h2>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
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
        ul {
            list-style-type: none;
            padding: 0;
            li {
                padding: 50px;
                span {
                    color: #B3B3B3;
                    font-size: 16px;
                }
                h1 {
                    font-size: 30px;
                    font-weight: normal;
                    cursor: pointer;
                    transition: color 300ms ease-in-out;
                    &:hover {
                        color: #18CCB1;
                    }
                }
                h2 {
                    font-size: 18px;
                    font-weight: normal;
                    color: #828282;
                }
                & + li {
                    border-top: 1px solid #EEE;
                }
            }
        }
    }
</style>
