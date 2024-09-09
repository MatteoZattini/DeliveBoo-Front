import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppProva from "./components/AppProva.vue";
import AppSingleRestaurant from "./components/AppSingleRestaurant.vue";
import RestaurantCard from "./components/RestaurantCard.vue";
import TypologyCard from "./components/TypologyCard.vue";
import Payment from "./components/Payment.vue";
import PaymentSuccess from "./components/PaymentSuccess.vue";
import PaymentDenied from "./components/PaymentDenied.vue";

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
            component: TypologyCard
        },

        {
            path: '/restaurant/:id',
            name: 'single-restaurant',
            component: AppSingleRestaurant
        },

        {
            path: '/RestaurantCard',
            name: 'RestaurantCard',
            component: RestaurantCard
        },

        {
            path: '/Checkout',
            name: 'Payment',
            component: Payment
        },

        {
            path: '/Checkout/Success',
            name: 'PaymentSuccess',
            component: PaymentSuccess
        },

        {
            path: '/Checkout/Denied',
            name: 'PaymentDenied',
            component: PaymentDenied
        },

    ]
});

export { router };