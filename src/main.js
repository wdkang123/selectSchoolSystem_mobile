import Vue from 'vue'
<<<<<<< HEAD
import Vuex from 'vuex'
=======
>>>>>>> c5afc7aad049b2ad9b88f8aff65701e0c2948fee
import App from './App.vue'
import router from './router.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import request from './assets/js/request'
import animated from 'animate.css' // npm install animate.css --save安装，再引入

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(request);
Vue.use(animated);
<<<<<<< HEAD
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
=======
new Vue({
  render: h => h(App),
  router,
>>>>>>> c5afc7aad049b2ad9b88f8aff65701e0c2948fee
}).$mount('#app')
