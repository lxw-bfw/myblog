/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2019-12-01 18:02:03
 * @LastEditors: lxw
 * @LastEditTime: 2019-12-01 21:26:56
 */


//首页展示的名言名句
const motto = require('../../config/motto.js');
const nav = require('../../config/nav.js')
const sidebar = require('../../config/sidebar.js')

module.exports = {
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["miku"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]
  ],
  base:'/myblog/',
  title: "Fonted lxw",
  description: motto[motto.length - 1],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  cache:false,
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    huawei: false,
    themePicker: false,
    nav:nav,
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: '/head2.jpg',
    
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: sidebar,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'lxw',
    // // 备案号
    // record: '',
    // 项目开始时间
    startYear: '2019',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['121023'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */
    //TODO:评论插件配置
    valineConfig: {
      appId: 'veKErblLtBBL401lOLccUv1a-gzGzoHsz',// your appId
      appKey: 'gEXA5eHWdiE9OI4vaprlT4Go', // your appKey
      placeholder: '窝窝头，一块钱四个，嘿嘿!',
      // avatar: 'monsterid',
      // serverUrl: 'https://leanserver.smallsunnyfox.com'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  