module.exports = {
  title: '乐颜',  // 设置网站标题
  description : '个人博客',
  base: '/vicky.github.io/',
  repo: 'https://susuvicky.github.io/vicky.github.io/',
  dest: './docs/.vuepress/dist',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  // base : '/v1/adroi-h5/adroiapi/',
  themeConfig : {
    nav : [
      { text: '首页', link: '/' },
      {
        text: '前端知识',
        // link: '/frontend/',
        items: [{
          text: 'Vuepress', link: '/frontend/vuepress/'
        },{
          text: 'Vue', link: '/frontend/vue/'
        },{
          text: 'React', link: '/frontend/react/'
        }]
      },
      { text: '关于我', link: '/about/' },
      { text: 'Github', link: 'https://github.com/susuvicky/vicky.github.io' }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: '前端知识',
        collapsable: false,
        children: [
          '/frontend/vuepress/',
          '/frontend/vue/',
          '/frontend/react/'
        ]
      },
      {
        title: '关于我',
        collapsable: false,
        children: [
          '/about/'
        ]
      }
    ],
    sidebarDepth : 2
  }
}
