import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'VitePress 文档',
  description: '基于 Vite 和 Vue 的静态网站生成器',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: 'API', link: '/api/' },
      { text: '关于', link: '/about' },
      { text: '下载 EPUB', link: '/documentation.epub' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '配置', link: '/guide/configuration' }
        ]
      },
      {
        text: 'API 参考',
        items: [
          { text: '配置项', link: '/api/' },
          { text: '主题配置', link: '/api/theme-config' }
        ]
      }
    ]
  }
});