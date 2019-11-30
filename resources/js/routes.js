import Home from "./src/components/Home.vue"
import Link from "./src/components/Link.vue"
import Login from './src/components/auth/Login.vue'

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: "/link",
        component: Link
    }
];
