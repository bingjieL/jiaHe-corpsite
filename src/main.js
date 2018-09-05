import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

//  引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//  初始化css
import './assets/css/root.css'
//  设置title

import VueWechatTitle from 'vue-wechat-title';  
Vue.use(VueWechatTitle)
Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false;

router.afterEach(() => {
  window.scrollTo(0,0);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
