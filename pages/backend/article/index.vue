<template>
    <div :class="prefixCls">
        <Row>
            <i-col>
                <Card>
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
    const prefixCls = 'backend__article'
    export default {
        name: 'backend-article',
        layout: 'backend',
        props: {
            prefixCls: {
                type: String,
                default: () => prefixCls
            }
        }
    }
</script>

<style lang="scss">

</style>
