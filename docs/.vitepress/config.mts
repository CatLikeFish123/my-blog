import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的个人知识库",
  description: "日常学习、前端、后端、生活碎碎念的知识沉淀",
  
  // 💡 重要：如果你的 GitHub 仓库名叫 my-wiki，这里记得改成 '/my-wiki/'
  base: '/my-blog/', 

  themeConfig: {
    // 头部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '🔥 核心指南', link: '/guide/getting-started' },
      { text: '🌐 友情链接', link: 'https://github.com' }
    ],

    // 👈 左侧侧边栏（知识库的核心，按分类组织）
    sidebar: {
      '/guide/': [
        {
          text: '🚀 快速开始',
          items: [
            { text: '知识库简介', link: '/guide/getting-started' },
            { text: '关于我', link: '/guide/about' }
          ]
        },
        {
          text: '🤖 AI 与大模型',
          collapsed: false,
          items: [
            { text: 'LLM 核心概念', link: '/guide/ai/llm-core-concepts' }
          ]
        },
        {
          text: '💻 技术笔记',
          collapsed: false, // 是否默认折叠
          items: [
            { text: 'HTML & CSS 基础', link: '/guide/tech/html-css' },
            { text: 'JavaScript 进阶', link: '/guide/tech/javascript' }
          ]
        },
        {
          text: '✍️ 读书与生活',
          collapsed: true, // 默认折叠
          items: [
            { text: '2026年年度书单', link: '/guide/life/books' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ],

    // 页脚配置
    footer: {
      message: '基于 VitePress 搭建',
      copyright: 'Copyright © 2026-至今 你的名字'
    },

    // 搜索配置（本地搜索，自带丝滑体验）
    search: {
      provider: 'local'
    },

    // 大纲标题层级（右侧目录）
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }
})