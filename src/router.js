import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppProva from "./components/AppProva.vue";
import AppSingleRestaurant from "./components/AppSingleRestaurant.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },

        {
            path: '/prova',
            name: 'prova',
            component: AppProva
        },

        {
            path: '/TypologyCard',
            name: 'TypologyCard',
            component: () => import('./components/TypologyCard.vue')
        },

        {
            path: '/restaurant/:id',
            name: 'restaurant',
            component: AppSingleRestaurant
        },

    ]
});

export { router };