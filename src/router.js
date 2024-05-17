import { createRouter, createWebHistory } from "vue-router";

import gametechMain from "./components/pages/main/gametech-main.vue";
import gametechCatalog from "./components/pages/catalog/gametech-catalog.vue";
import gametechCatalogProductsList from "./components/pages/catalog/gametech-catalog-products-list.vue";
import gametechFavorites from "./components/pages/favorites/gametech-favorites.vue";
import gametechCart from "./components/pages/cart/gametech-cart.vue";
import gametechContacts from "./components/pages/contacts/gametech-contacts.vue";

import gametech404 from "./components/pages/404/gametech-404.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: gametechMain,
            meta: {
                title: "GameTech - Главная страница"
            },
        },

        {
            path: "/catalog",
            name: "catalog",
            component: gametechCatalog,
            meta: {
                title: "GameTech - Каталог товаров"
            },
        },

        {
            path: "/catalog/:id",
            name: "product",
            component: gametechCatalogProductsList,
            meta: {
                title: "GameTech - "
            },
        },

        {
            path: "/favorites",
            name: "favorites",
            component: gametechFavorites,
            meta: {
                title: "GameTech - Избранные товары"
            },
        },

        {
            path: "/cart",
            name: "cart",
            component: gametechCart,
            meta: {
                title: "GameTech - Корзина"
            },
        },

        {
            path: "/contacts",
            name: "contacts",
            component: gametechContacts,
            meta: {
                title: "GameTech - Контакты"
            },
        },

        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: gametech404,
            meta: {
                title: "GameTech - Страница не найдена"
            },
        },
    ],

    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, left: 0}
        } else {
            return { x: 0, y: 0 }
        }
    }
})
