import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from './components/IndexPage.vue'
import MainView from './components/MainView.vue'
import MyView from "./components/MyView";


Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/IndexPage',
            name:'IndexPage',
            component:IndexPage
        }, {
            path:'/MainView',
            name:'MainView',
            component:MainView
        }, {
            path:'/MyView',
            name:'MyView',
            component:MyView
        }
    ]
});
