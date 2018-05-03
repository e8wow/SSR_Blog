<template>
    <div :class="prefixCls">
        <Sider class="hide-scroll-bar" :style="siderStyles">
            <Menu width="auto" theme="dark">
                <template v-for="menu in menusData">
                    <Submenu v-if="menu.items">
                        <template slot="title">
                            <Icon class="menu__icon" v-if="menu.icon" :type="menu.icon"/>
                            {{menu.text}}
                        </template>
                        <MenuItem v-for="item in menu.items" :name="item.name" :key="item.name">
                            <Icon class="menu__icon" v-if="item.icon" :type="item.icon"/>
                            {{item.text}}
                        </MenuItem>
                    </Submenu>
                    <MenuItem v-else :name="menu.name">
                        <Icon class="menu__icon" v-if="menu.icon" :type="menu.icon"/>
                        {{menu.text}}
                    </MenuItem>
                </template>
            </Menu>
        </Sider>
        <Layout :style="layoutStyles">
            <Header :style="headerStyles"/>
            <Content :style="contentStyles">
                <Card>
                    <div style="height: 1500px">Content</div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
    const prefixCls = 'backendLayout'
    export default {
        name: 'backend-layout',
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            }
        },
        computed: {
            siderStyles() {
                return {
                    position: 'fixed',
                    height: '100vh',
                    left: 0,
                    overflow: 'auto'
                }
            },
            layoutStyles() {
                return {
                    marginLeft: '200px',
                    minHeight: '100vh'
                }
            },
            headerStyles() {
                return {
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    background: '#fff',
                    boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'
                }
            },
            contentStyles() {
                return {
                    padding: '16px'
                }
            },
            menusData() {
                return this.$store.state.backend.menus
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/styles/index";
    @import "../node_modules/iview/dist/styles/iview.css";

    $backendLayoutPrefixCls: 'backendLayout';
    .#{$backendLayoutPrefixCls} {
        .menu__icon {
            margin: 0 5px;
        }
    }
</style>
