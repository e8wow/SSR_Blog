export const state = () => ({
    menus: [
        {
            name: 'dashboard',
            icon: 'monitor',
            text: '系统概览'
        },
        {
            name: 'article',
            icon: 'ios-book-outline',
            text: '文章系统',
            items: [
                {
                    name: 'article-create',
                    icon: 'plus-round',
                    text: '添加文章'
                }
            ]
        }
    ]
})
