import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";


Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
export default router;
