import Vue from "vue";
import VueRouter from "vue-router";
import Launches from "../views/Launches";
import Launch from "../views/Launch";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Launches",
    component: Launches
  },
  {
    path: "/launches/:id",
    name: "Launch",
    component: Launch
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
