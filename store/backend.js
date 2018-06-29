export const state = () => ({
    menus: [
        {
            name: 'backend',
            icon: 'monitor',
            text: '系统概览',
            path: '/backend'
        },
        {
            name: 'article',
            icon: 'ios-book-outline',
            text: '文章系统',
            items: [
                {
                    name: 'backend-article',
                    icon: 'ios-list-outline',
                    text: '文章管理',
                    path: '/backend/article'
                }
            ]
        }
    ]
})
