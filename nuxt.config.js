/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-07 11:01:14
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-08 14:10:31
 */
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css?family=Antic+Slab" },
      { href: "https://www.17sucai.com/preview/38733/2013-10-10/3d-image-transitions/css/style.css" },
      {
        href: "css/element.css", rel: "stylesheet"
      },
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css", rel: "stylesheet"
      }
    ],
    script: [
      {
        src: 'https://cdn.dowebok.com/131/js/wow.min.js'
      },
      {
        src: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js"
      },
      {
        src: "https://www.17sucai.com/preview/38733/2013-10-10/3d-image-transitions/js/flux.js"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: [
  //   'element-ui/lib/theme-chalk/index.css'
  // ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: { allChunks: true },
    transpile: [/^element-ui/],
  }
}
