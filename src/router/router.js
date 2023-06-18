import { createRouter, createWebHistory } from  'vue-router';
import vCatalog from '../components/v-catalog.vue';

const  routes = [
    {
        path: '/',
        name: 'home',
        component: vCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../components/v-cart.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export  default router;