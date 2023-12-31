import { createRouter, createWebHistory } from  'vue-router';
import vCatalog from '../components/catalog/v-catalog.vue';

const  routes = [
    {
        path: '/',
        name: 'home',
        component: vCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../components/cart/v-cart.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export  default router;