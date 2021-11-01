const { config } = require('vuepress-theme-hope')
const sidebar = require('./sidebar')
const nav = require('./nav')

module.exports = config({
  title: '读书笔记',
  description: '读万卷书，行万里路！',
  hostname: 'https://lastknightcoder.github.io/booknote-blog/',
  markdown: {
    extendMarkdown: md => {
        md.set({
            html: true
        })
        md.use(require('markdown-it-katex'))
    }
  },
  base: '/booknote-blog/',
  themeConfig: {
    logo: '/logo.svg',
    sidebar,
    nav,
    hostname: 'https://lastknightcoder.github.io/booknote-blog/',
    feed: false,
    repo: 'LastKnightCoder/booknote-blog',
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    photoSwipe: false,
    mdEnhance: {
      tex: false,
      lineNumbers: false,
      tasklist: true
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features')
  },
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
          clientID: '651c9d66077531d194cf',
          clientSecret: '705cbe0ab0e14a1e67935e7f839cbdda5fe0da48',
          repo: 'booknote-blog',
          owner: 'LastKnightCoder',
          admin: ['LastKnightCoder'],
          // github issue 不能超过 50 个字符
          id: '<%- frontmatter.commentid %>',
          distractionFreeMode: true // 是否启动阴影遮罩
        }
      }
    ],
    ['run', {
      jsLabs: ['https://unpkg.com/element-ui/lib/index.js'],
      cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
    }],
    ['element-ui'],
    ['vuepress-plugin-nprogress'],
    ['vuepress-plugin-viewer']
  ],
  head: [
    ['link', {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }],
    ['link', {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }]
  ]
})
