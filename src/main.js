import Vue from "vue";
import App from "./App.vue";
import Element from 'element-ui';
import PixelGlass from "pixel-glass";
import router from "./router/router";

// Vue.use(VueRouter);
Vue.use(PixelGlass);
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount("#app");