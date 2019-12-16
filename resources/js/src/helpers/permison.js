import { getToken } from './utils'

export function initialize(store, router) {
    console.log("initialize", getToken(), store.state)
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
        const isLogin = store.state.isLogin || (getToken() !== '')
        const currentUser = store.state.user
  
        document.title = to.meta.title + " | Base Api"
        // console.log("meta", [to.meta, currentUser])

        if (requiresAuth && !isLogin) {
            next('/login')
            // alert()
        } else if (to.path == '/login' && isLogin) {
            store.commit('auth_success', getToken(), {})
            next('/')
        } else {
            next()
        }
    });

    axios.interceptors.response.use(null, (error) => {


        if (error.response.status == 401) {
            store.commit('logout');
            router.push('/login');
        }

        return Promise.reject(error)
    });

    if (store.getters.currentUser) {
        // console.log("token", store.getters.currentUser.token)
        setAuthorization(store.getters.currentUser.token)
    }
}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}
