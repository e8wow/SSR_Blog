module.exports = {
    babel: {
        'plugins': [['component', [
            {
                'libraryName': 'element-ui',
                'styleLibraryName': 'theme-default'
            },
            'transform-async-to-generator',
            'transform-runtime'
        ]]],
        comments: true
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'Jelf 博客',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Jelf 博客'},
            {'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_646835_4hqo6jldh2d18aor.css'} // blog图标库
        ],
        script: [
            {src: '//at.alicdn.com/t/font_646835_4hqo6jldh2d18aor.js'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#18CCB1'},
    css: [
        './assets/styles/normalize.css',
        './assets/styles/index.scss'
        // 'element-ui/lib/theme-chalk/index.css'
    ],
    /*
    ** Build configuration
    */
    build: {
        // vendor: [
        //     'element-ui'
        // ],
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: [
        // {src: '~plugins/element-ui', ssr: true}
        {src: '~plugins/globalComponents', ssr: true}
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        timeout: 10000,
        headers: {},
        interceptors: {
            request: {
                use: [
                    config => config,
                    err => Promise.reject(err)
                ]
            },
            response: {
                use: [
                    response => response,
                    err => Promise.reject(err)
                ]
            }
        }
    }
}
