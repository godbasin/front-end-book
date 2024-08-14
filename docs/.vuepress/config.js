module.exports = {
    title: '前端的进击',
    base: '/front-end-book/',
    shouldPrefetch: () => false,
    description: '被删',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'godbasin/front-end-book',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
    
        // 以下为可选的编辑链接选项
    
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'sourcecode',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '我想完善该文章！',
        nav: [
            { text: '概述', link: '/' },
            { text: '内容', link: '/getting-started/' },
            { text: '参与贡献', link: '/how-to-contribute' },
        ],
        sidebar: {
            '/getting-started/': [
                {
                    title: '前言',
                    collapsable: true,
                    children: [
                        '/getting-started/start.md',
                    ]
                }, {
                    title: '第 5 章 如何进行职业规划',
                    collapsable: true,
                    children: [
                        '/getting-started/5/5.1.md',
                        '/getting-started/5/5.2.md',
                        '/getting-started/5/5.3.md',
                        '/getting-started/5/5.4.md',
                    ]
                }, {
                    title: '第 6 章 工作中的原则和方法',
                    collapsable: true,
                    children: [
                        '/getting-started/6/6.1.md',
                        '/getting-started/6/6.2.md',
                        '/getting-started/6/6.3.md',
                    ]
                }, {
                    title: '第 7 章 我和团队有个约会',
                    collapsable: true,
                    children: [
                        '/getting-started/7/7.1.md',
                        '/getting-started/7/7.2.md',
                        '/getting-started/7/7.3.md',
                    ]
                }, {
                    title: '第 8 章 提高效率，早点下班',
                    collapsable: true,
                    children: [
                        '/getting-started/8/8.1.md',
                        '/getting-started/8/8.2.md',
                        '/getting-started/8/8.3.md',
                    ]
                }, {
                    title: '第 9 章 工作与生活息息相关',
                    collapsable: true,
                    children: [
                        '/getting-started/9/9.1.md',
                        '/getting-started/9/9.2.md',
                        '/getting-started/9/9.3.md',
                    ]
                }, {
                    title: '后记',
                    collapsable: true,
                    children: [
                        '/getting-started/end.md',
                    ]
                }
            ], 
        }
    },

};