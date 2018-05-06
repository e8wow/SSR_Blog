<template>
    <div :class="prefixCls">
        <Row :gutter="10">
            <i-col span="18">
                <Card>
                    <i-form :label-width="80">
                        <FormItem label="文章标题" required>
                            <i-input>
                                <Icon type="android-list" slot="append"></Icon>
                            </i-input>
                        </FormItem>
                    </i-form>
                    <mavon-editor :class="`${prefixCls}__editor`" @fullScreen="handlerFullScreen"
                                  :toolbars="toolbars"></mavon-editor>
                </Card>
            </i-col>
            <i-col span="6">
                <Row>
                    <i-col>
                        <Card>
                            <p slot="title">
                                <Icon type="paper-airplane"></Icon>
                                发布
                            </p>
                            <p class="mt10">状&nbsp;&nbsp;态：</p>
                            <p class="mt10">公开度：</p>
                            <p class="mt10">立即发布：</p>
                        </Card>
                    </i-col>
                    <i-col class="mt10">
                        <Card></Card>
                    </i-col>
                </Row>
            </i-col>
        </Row>
    </div>
</template>

<script>
    const prefixCls = 'backendArticleDetail'
    export default {
        name: 'article-detail',
        layout: 'backend',
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
                }
            }
        },
        methods: {
            handlerFullScreen() {
            }
        }
    }
</script>

<style lang="scss">
    $backend__articleDetailPrefixCls: 'backendArticleDetail';
    .#{$backend__articleDetailPrefixCls} {
        &__editor {
            height: 760px;
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
