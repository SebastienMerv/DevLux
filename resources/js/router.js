// resources/js/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from './views/Home.vue';
import middleware from './middleware';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/developers', name: 'developers', component: () => import('./views/OurDevelopers.vue') },
    { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
    { path: '/dashboard', name: 'dashboard', component: () => import('./views/Dashboard.vue'), beforeEnter: middleware },
    { path: '/dashboard/discover', name: 'discover', component: () => import('./views/Discover.vue'), beforeEnter: middleware },
    { path: '/profile', name: 'profile', component: () => import('./views/Profile.vue'), beforeEnter: middleware },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
