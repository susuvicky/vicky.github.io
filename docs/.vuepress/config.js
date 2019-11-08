module.exports = {
  title: '汤圆',  // 设置网站标题
  description : '一只前端猫的博客', //网站描述
  base: '/vicky.github.io/', //根路径
  repo: 'https://susuvicky.github.io/vicky.github.io/', //网站地址
  dest: './docs/.vuepress/dist', //输出目录
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ], //注入到<head>标签
  themeConfig : {
    logo: '/logo.png', //网站logo
    smoothScroll: true,
    nav : [
      { text: '首页', link: '/' },
      {
        text: '前端知识',
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
          {
            title: 'VuePress',
            path: '/frontend/vuepress/',
            children: [
              ['/frontend/vuepress/', '介绍'],
              ['/frontend/vuepress/basic', '基础知识'],
              ['/frontend/vuepress/work', '如何使用']
            ]
          }
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
