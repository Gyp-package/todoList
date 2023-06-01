import Vue from 'vue'
import App from './App.vue'

// // 引入插件
// import plugins from './plugin'
// // 全局应用插件
// Vue.use(plugins,100,200)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
