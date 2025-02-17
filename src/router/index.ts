import { createRouter, createWebHistory } from "vue-router";
import RouterTest from "../view/RouterTest.vue";
import Home from "../App.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/RouterTest",
    component: RouterTest,
    name: "RouterTest",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
