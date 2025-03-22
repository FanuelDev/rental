import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import MainLayout from '../layouts/mainLayout.vue';
import Search from '../pages/Search.vue';
import DetailSearch from '../pages/detailSearch.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import AuthLayout from '../layouts/authLayout.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', component: Home },
            { path: 'search', component: Search },
            { path: 'search/:id', component: DetailSearch },
        ],
    },
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            { path: 'login', component: Login },
            { path: 'register', component: Register },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;