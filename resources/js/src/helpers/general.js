export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
        const currentUser = store.state.currentUser

        // console.log("to", to)
        document.title = to.meta.title + " | Management Ban"
        // console.log("meta", [to.meta, currentUser])

        if (requiresAuth && !currentUser) {
            next('/login')
            // alert()
        } else if (to.path == '/login' && currentUser) {
            next('/')
        } else if (currentUser && currentUser.roles == 'mekanik' && to.meta.roles == 'admin') {
            alert("Anda tidak diperkenankan di halaman ini")
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
