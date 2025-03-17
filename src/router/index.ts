import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import MainLayout from '../layouts/mainLayout.vue';
import Search from '../pages/Search.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', component: Home },
            { path: 'search', component: Search },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;