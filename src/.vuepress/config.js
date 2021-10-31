const { config } = require('vuepress-theme-hope')
const md5 = require('md5')
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
    mdEnhance: {
      tex: false,
      lineNumbers: false
    }
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
          id: '<% window.location.pathname.substring(0, 50) %>',
          distractionFreeMode: false 
        }
      }
    ]
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