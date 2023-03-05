import {createRouter, createWebHistory} from "vue-router";

import PageHome from "@/pages/home/PageHome";
import PageNav_1 from "@/pages/nav-1/PageNav_1.vue";
import PageNav_2 from "@/pages/nav-2/PageNav_2.vue";
import PageNav_3 from "@/pages/nav-3/PageNav_3.vue";
import PageNav_4 from "@/pages/nav-4/PageNav_4.vue";
import PageNav_5 from "@/pages/nav-5/PageNav_5.vue";
import NotFound from "@/pages/error/NotFound";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            // { path: "/", redirect: "/news" },
            {path: "/", component: PageHome},
            {path: "/placeholder-nav-1", component: PageNav_1},
            {path: "/placeholder-nav-2", component: PageNav_2},
            {path: "/placeholder-nav-3", component: PageNav_3},
            {path: "/placeholder-nav-4", component: PageNav_4},
            {path: "/placeholder-nav-4", component: PageNav_5},
            {path: "/:notFound(.*)", component: NotFound},
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
