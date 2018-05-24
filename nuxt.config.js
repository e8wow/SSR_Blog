module.exports = {
    babel: {
        'plugins': [['import', {
            'libraryName': 'iview',
            'libraryDirectory': 'src/components'
        }]],
        comments: true
    },
    cache: true,
    router: {
        linkActiveClass: 'nuxt__link-active',
        linkExactActiveClass: 'nuxt__linkExact-active'
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
            {httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1'}
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
        './assets/styles/base.scss',
        'iview/dist/styles/iview.css',
        'mavon-editor/dist/css/index.css'
    ],
    /*
    ** Build configuration
    */
    build: {
        vendor: [
            'iview',
            'mavon-editor'
        ],
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            config.module.rules.push({
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            })
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
        // {src: '~plugins/apollo-graphQL', ssr: true},
        {src: '~plugins/globalComponents', ssr: true},
        {src: '~plugins/iview', ssr: true},
        {src: '~plugins/mavon-editor', ssr: false}
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/apollo'
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
    },
    apollo: {
        clientConfigs: {
            default: '~/apollo/client-configs/default.js'
        }
    }
}
