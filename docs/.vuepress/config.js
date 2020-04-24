module.exports = {
    title: 'Hisen UI',
    description: '一个基于Vue的UI组件库',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '简历', link: 'https://zhuanghaixin.cn' },
            { text: 'Github', link: 'https://github.com/zhuanghaixin' },
            {
                text: '博客',
                items: [
                    { text: '语雀', link: 'https://www.yuque.com/zhuanghaixin/utccb7' },
                    { text: '个人博客', link: 'http://zhuanghaixin.cn' },
                ]
            },
            {
                text: '项目',
                items: [
                    { text: 'Vue', items: [
                            { text: 'Vue仿小米商城', link: 'https://mi.js101.fun' },
                            { text: 'Vue管理面板', link: 'https://zhuanghaixin-vue-admin-dashboard.netlify.com' }
                        ] },
                    { text: '原生JS', items: [
                            { text: '画板', link: 'https://zhuanghaixin.github.io/Canvas-drawing-board/canvas-drawing-board/index.html' }
                        ] }
                ]
            },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' },
                ]
            }
            ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title:'组件',
                children:['/components/button']
            }

        ]
    }
}
