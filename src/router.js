import Vue from "vue";
import Router from "vue-router";
import Nofund from './views/404.vue'
import Home from "./views/Home.vue";
import Product from "./views/product.vue"
import Device from "./views/device.vue"
import Cooperation from './views/cooperation.vue'
import Introduce from './views/introduce.vue'
import contactUs from './views/contactUs.vue'
import News from './views/news.vue'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: '佳和-首页'
      }
    },
    {
      path: "/Introduce",
      name: "Introduce",
      component: Introduce,
      meta: {
        title: '佳和-简介'
      }
    },
    {
      path: "/Product",
      name: "Product",
      component: Product,
      meta: {
        title: '佳和-产品'
      }
    },
    {
      path: "/Device",
      name: "Device",
      component: Device,
      meta: {
        title: '佳和-厂房设备'
      }
    },
    {
      path: "/Cooperation",
      name: "Cooperation",
      component: Cooperation,
      meta: {
        title: '佳和-合作伙伴'
      }
    },
    {
      path: "/news",
      name: "News",
      component: News,
      meta: {
        title: '佳和-新闻中心'
      }
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: contactUs,
      meta: {
        title: '佳和-联系我们'
      }
    },
    {
      path: "*",
      name: "Nofund",
      component: Nofund,
      meta: {
        title: '佳和-404'
      }
    },
  ]
});
