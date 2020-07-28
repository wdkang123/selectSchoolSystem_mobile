import Vue from 'vue'
import Vuex from 'vuex'
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
}).$mount('#app')
