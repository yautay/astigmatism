import { createRouter, createWebHistory } from "vue-router";

import PageHome from "@/pages/home/PageHome";
import NotFound from "@/pages/error/NotFound";

const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      // { path: "/", redirect: "/news" },
      { path: "/", component: PageHome },
      { path: "/:notFound(.*)", component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        }
      }
    }
  }
);

export default router;
