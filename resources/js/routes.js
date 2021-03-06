import Home from "./src/components/Home.vue"
import Link from "./src/components/Link.vue"
import Login from './src/components/auth/Login.vue'

export const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            requiresAuth: true,
            title: "Home page"
        }
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: "/link",
        component: Link,
        meta: {
            requiresAuth: true,
            title: "Link Page"
        }
    }
];
