import { getToken, getExpired, setCredential, removeAuthCredential } from './src/helpers/utils'

export default {
    state: {
        welcomeMessage: "Welcome to my vue App",
        isLoggedIn: !!localStorage.getItem('token'),
        user: {},
        status: '',
        token: '',
        errorMessage: {
            login: ''
        }
    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        },
        getError: state => index => {
            return state.errorMessage[index]
        }
    },
    mutations: {
        auth_success(state, token, user) {
            state.isLoggedIn = true
            state.user = user
            state.status = 'success'
            state.token = token

        },
        auth_error(state, message) {
            state.status = 'error'
            state.user = {}
            state.errorMessage = { ...state.errorMessage, login: message }
        },
    },
    actions: {
        loginAction({ commit }, user) {
            return new Promise((resolve, reject) => {
                axios.post('/api/v1/auth/login', { email: user.username, password: user.pass })
                    .then(response => {
                        const { data: { data: { token, expires_in, user,token_type } } } = response
                        commit('auth_success', token, user)
                        // console.log("data",response)
                        setCredential(token, expires_in)
                        axios.defaults.headers.common['Authorization'] = `${token_type} ${token}`
                        
                        resolve(response)
                    })
                    .catch(err => {
                        const { response: { data: { message } } } = err
                        commit('auth_error', message)
                        reject(err)
                    })
            })
        }
    }
};
