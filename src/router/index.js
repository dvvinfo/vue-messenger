import Vue from "vue";
import VueRouter from "vue-router";
import ContactUserinfo from "../components/contacts/ContactUserInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "contacts",
    component: () => import("../views/ContactsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactUserinfo,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/call",
    name: "call",
    component: () => import("../views/CallView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/ChatView.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
