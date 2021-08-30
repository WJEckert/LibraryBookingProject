import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import App from './App.vue'
import i18n from './i18n/i18n'
import vueRouter from 'vue-router'
import router from './routes'
import 'vue-toast-notification/dist/theme-default.css';

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

Vue.use(vueRouter)
Vue.use(VueToast)

new Vue({
  created: function() {
    window.vue = this
  },
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
