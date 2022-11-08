import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入并安装 vant 组件库
// 1. 引入你需要的组件
import Vant from 'vant'
// 2. 引入组件样式
// 切记：为了能够覆盖默认的 less 变量，这里一定要把后缀名改为 .less
import 'vant/lib/index.less'
// 3. 注册你需要的组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
