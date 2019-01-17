import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Cart from './pages/Cart.vue'
import store from './store/store.js'



Vue.use(VueRouter)

const router= new VueRouter({
  routes:[
    { path: '/', component: App},
    { path: '/cart', component: Cart}
  ]
})
  


new Vue({
  el: '#app',
  router: router,
  store
})


