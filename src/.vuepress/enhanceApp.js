/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Element from 'element-ui'
import HighchartsVue from 'highcharts-vue'

import 'element-ui/lib/theme-chalk/index.css'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(Element)
  Vue.use(HighchartsVue)
}
