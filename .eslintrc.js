// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true
    },
    globals: {
        expect: true,
        sinon: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'vue',
        'html'
    ],
    // add your custom rules here
    rules: {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'indent': [2, 4],// 缩进
        'space-before-function-paren': 0,
        "no-unused-expressions": 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
