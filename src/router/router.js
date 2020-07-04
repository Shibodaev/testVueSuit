import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import homepage from '../pages/HomePage'

let router = new VueRouter({
    routes: [{
        path: '/',
        name: 'HomePage',
        components: homepage
    }]
});
export default router;