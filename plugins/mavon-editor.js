import Vue from 'vue'

if (process.title === 'browser') {
    Vue.use(require('mavon-editor'))
}
