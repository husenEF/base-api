import { getLocalUser } from "./src/helpers/auth"

const user = getLocalUser()

export default {
    state: {
        //default var
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: [],
        imagesPath:"/images/",
    },
    getters: {
        // pasring default state to component
        // in component call with 
        // computer:{
        //     someMethod(){
        //      return this.$store.getters.someMethod
        //     }
        // }
        
        isLoading(state) {
            return state.loading
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        currentUser(state) {
            return state.currentUser
        },
        authError(state) {
            return state.auth_error
        },
        customers(state) {
            return state.customers
        },
        getImagePath(state){
            return state.imagesPath
        }
    },
    mutations: {
        //commit from vue component
        //update state from mutation
        //this.$store.commit("yourMethod",{yourParsingdata})
        login(state) {
            state.loading = true
            state.auth_error = null
        },
        loginSuccess(state, payload) {
            state.auth_error = null
            state.isLoggedIn = true
            state.loading = false
            state.currentUser = Object.assign({}, payload.user, { token: payload.api_token })

            localStorage.setItem("user", JSON.stringify(state.currentUser))
        },
        updateUser(state, payload) {
            // state.currentUser = Object
            console.log("update", payload)
            state.currentUser = Object.assign({}, payload.data, { token: user.token })
            localStorage.setItem("user", JSON.stringify(state.currentUser))
        },
        loginFailed(state, payload) {
            state.loading = false
            state.auth_error = payload.error
        },
        logout(state) {
            localStorage.removeItem("user")
            state.isLoggedIn = false
            state.currentUser = null
        },
        updateCustomers(state, payload) {
            state.customers = payload
        }
    },
    actions: {
        login(context) {
            context.commit("login")
        },
        getCustomers(context) {
            axios.get('/api/customers')
                .then((response) => {
                    context.commit('updateCustomers', response.data.customers)
                })
        }
    }
}
