<template>
    <svg v-if="svg" :class="classs" :style="styles" aria-hidden="true">
        <use :xlink:href="`#${icon}`"></use>
    </svg>
    <span v-else :class="classs" :style="styles"></span>
</template>

<script>
    export default {
        name: 'icon',
        props: {
            size: [String, Number],
            color: String,
            icon: {
                type: String,
                required: true
            },
            lib: {
                type: String,
                default: () => 'icon-blog'
            },
            svg: Boolean
        },
        computed: {
            classs() {
                if (this.svg) {
                    return ['icon-svg']
                }
                return [this.lib, this.icon]
            },
            styles() {
                let {size, color} = this
                size = `${size}px`
                if (this.svg) {
                    return {
                        color,
                        height: size,
                        width: size
                    }
                }
                return {
                    color: color,
                    fontSize: size
                }
            }
        }
    }
</script>

<style>
    .icon-svg {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
