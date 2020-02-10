import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'alertifyjs/build/alertify.min.js'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import alertify from "alertifyjs";

alertify.set('notifier', 'position', 'bottom-left');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
