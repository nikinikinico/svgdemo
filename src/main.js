import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '@/icons/index.js'
new Vue({
  render: h => h(App),
}).$mount('#app')
