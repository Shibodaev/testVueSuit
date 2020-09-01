import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router/router";

import Element from 'element-ui';
import PixelGlass from "pixel-glass";


Vue.config.productionTip = false;


Vue.use(PixelGlass);
Vue.use(Element);
Vue.use(VueRouter);
// const router = new VueRouter({ routes });


new Vue({
    router,
    render: h => h(App)

}).$mount("#app");