import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from './components/IndexPage.vue'

Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/IndexPage',
            name:'IndexPage',
            component:IndexPage
        }
    ]
});
