module.exports = {
  title: 'IntelliJ IDEA Plugin Dev',
  description: 'IntelliJ IDEA 插件开发指南',
  // base: '/idea-plugin-dev/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#00ABE9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#06BDFF' }],
  ],
  host: '127.0.0.1',
  port: '9529',
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
    anchor: {
      permalink: true
    },
    toc: {
      includeLevel: [1, 2]
    },
    config: md => {
      // 使用更多 markdown-it 插件！
      md.use(require('markdown-it-task-lists'))
      .use(require('markdown-it-imsize'), { autofill: true })
    }
  },
  themeConfig: {
    docsRepo: 'https://github.com/dong4j/idea-plugin-dev',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '查看原文|编辑此页',
    searchMaxSuggestions: 10,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true,
    },
    lastUpdated: '上次更新',

    nav: [
      {
        text: '准备工作',
        link: '/start/'
      },
      {
        text: 'Plugins',
        items: [
          {
            text: "MIK",
            link: "/product/markdown-image-kit"
          }
        ]
      },
      {
        text: '反馈',
        link: 'https://github.com/dong4j/idea-plugin-dev/issues/new/choose',
        icon: 'reco-category'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/dong4j/idea-plugin-dev'
      },
    ],
    sidebar: {
    }
  }
};