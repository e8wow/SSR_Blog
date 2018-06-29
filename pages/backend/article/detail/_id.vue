<template>
    <div :class="prefixCls">
        <Row :gutter="10">
            <i-col span="18">
                <Card>
                    <p slot="title">
                        <Icon type="paper-airplane"/>
                        文章内容
                    </p>
                    <i-form :label-width="80">
                        <FormItem label="文章标题" required>
                            <i-input>
                                <Icon type="android-list" slot="append"></Icon>
                            </i-input>
                        </FormItem>
                    </i-form>
                    <mavon-editor :class="`${prefixCls}__editor`"
                                  placeholder="请输入markdown文章"
                                  :toolbars="toolbars"/>
                </Card>
            </i-col>
            <i-col span="6">
                <Row>
                    <i-col>
                        <Card>
                            <p slot="title">
                                <Icon type="paper-airplane"/>
                                发布
                            </p>
                            <i-form :label-width="80">
                                <form-item>
                                    <span slot="label">
                                        <Icon type="android-time"/>     状态:
                                    </span>
                                    <i-select></i-select>
                                </form-item>
                                <form-item>
                                     <span slot="label">
                                        <Icon type="eye"/> 公开度:
                                    </span>
                                    <i-select></i-select>
                                </form-item>
                                <form-item>
                                     <span slot="label">
                                        <Icon type="ios-calendar-outline"/> 立即发布:
                                    </span>
                                    <i-select></i-select>
                                </form-item>
                                <form-item>
                                    <Button type="primary" @click="">发布</Button>
                                    <Button type="ghost" @click="" style="margin-left: 8px">保存草稿</Button>
                                    <Button type="ghost" @click="" style="margin-left: 8px">预览</Button>
                                </form-item>
                            </i-form>
                        </Card>
                    </i-col>
                    <i-col class="mt10">
                        <Card>
                            <p slot="title">
                                <Icon type="navicon-round"></Icon>
                                分类目录
                            </p>
                            <Tabs>
                                <TabPane label="所有分类目录">
                                    <div style="height: 250px">
                                        <Tree :data="classification" show-checkbox/>
                                    </div>
                                </TabPane>
                                <TabPane label="常用目录">
                                    <div>
                                        <Tree/>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </i-col>
                    <i-col class="mt10">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-pricetags-outline"></Icon>
                                标签
                            </p>
                            <Row>
                                <i-col span="18">
                                    <i-select v-model="tags" filterable multiple placeholder="请选择文章标签">
                                        <i-option value="vue">vue</i-option>
                                        <i-option value="react">react</i-option>
                                        <i-option value="angular">angular</i-option>
                                        <i-option value="bootstrap">bootstrap</i-option>
                                        <i-option value="jquery">jquery</i-option>
                                        <i-option value="graphQL">graphQL</i-option>
                                        <i-option value="REST">REST</i-option>
                                        <i-option value="ES6">ES6</i-option>
                                    </i-select>
                                </i-col>
                                <i-col span="6">
                                    <Button long>
                                        新建
                                    </Button>
                                </i-col>
                            </Row>
                        </Card>
                    </i-col>
                </Row>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    const prefixCls = 'backendArticleDetail'
    export default {
        name: 'article-detail',
        layout: 'backend',
        apollo: {
            article: gql`{article}`
        },
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            }
        },
        data() {
            return {
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: false, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true // 预览
                },
                tags: [],
                classification: [
                    {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }, {
                        title: 'vue'
                    }
                ],
                article: {}
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    $backend__articleDetailPrefixCls: 'backendArticleDetail';
    .#{$backend__articleDetailPrefixCls} {
        &__editor {
            height: 705px;
            .v-note-op {
                position: sticky;
                top: 64px;
            }
        }
        .fullscreen {
            height: 100%;
            .v-note-op {
                position: static;
                top: auto;
            }
        }
    }
</style>
