// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// element 框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css'

import App from './App'
import router from './router'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
