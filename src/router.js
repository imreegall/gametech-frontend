import { createRouter, createWebHistory } from "vue-router";

import gametechMain from "./components/pages/main/gametech-main.vue";
import gametechCatalog from "./components/pages/catalog/gametech-catalog.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: gametechMain,
            meta: {
                title: "GAMETECH - Главная страница"
            },
        },

        {
            path: "/catalog",
            name: "catalog",
            component: gametechCatalog,
            meta: {
                title: "GAMETECH - Каталог товаров"
            },
        },

        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "404",
        //     component: ,
        //     meta: {
        //         title: "Historical Collection - 404"
        //     },
        // },
    ],

    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, left: 0}
        } else {
            return { x: 0, y: 0 }
        }
    }
})
