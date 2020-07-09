import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import Test from "../views/Test.vue";
import DarkMode from "../views/DarkMode.vue";
import Api from "../views/Api.vue";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/darkmode",
    name: "Darkmode",
    component: DarkMode
  },
  {
    path: "/api",
    name: "Api",
    component: Api
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
