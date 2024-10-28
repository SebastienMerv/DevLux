// resources/js/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from './views/Home.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/developers', name: 'developers', component: () => import('./views/OurDevelopers.vue') },
    { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
    { path: '/dashboard', name: 'dashboard', component: () => import('./views/Dashboard.vue') },
    { path: '/dashboard/discover', name: 'discover', component: () => import('./views/Discover.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
