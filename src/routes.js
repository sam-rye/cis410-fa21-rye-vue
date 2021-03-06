import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import ConcertDetail from "./components/ConcertDetail.vue";
import Concerts from "./components/Concerts.vue";
import NotFound from "./components/NotFound.vue";
import ReviewCreate from "./components/ReviewCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import myStore from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/account",
      component: Account,
      beforeEnter(to, from, next) {
        if (myStore.state.token) {
          next();
        } else {
          next("/login");
        }
      },
    },
    { path: "/login", component: Login },
    { path: "/concerts", component: Concerts },
    {
      path: "/concerts/:pk",
      component: ConcertDetail,
      children: [{ path: "review", component: ReviewCreate }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
