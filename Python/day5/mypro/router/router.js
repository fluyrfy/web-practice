import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Index from "../src/pages/Index.vue";
import About from "../src/pages/About.vue";
import Contact from "../src/pages/Contact.vue";
import Register from "../src/pages/Register.vue";
import Login from "../src/pages/Login.vue";
import Cart from "../src/pages/Cart.vue";
import News from "../src/pages/News.vue";
import NewsDetail from "../src/pages/NewsDetail.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Index,
      name: "Index",
    },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/cart", component: Cart },
    { path: "/news", component: News },
    { path: "/newsDetail", component: NewsDetail, name: "NewsDetail" },
  ],
});

export default router;
