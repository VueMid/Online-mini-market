import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        {
            path: '/create',
            name: 'CreateProduct',
            component: () => import('../pages/createProduct.vue'),
        }
    ]
})
export default router;