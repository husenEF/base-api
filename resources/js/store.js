
export default {
    state: {
        welcomeMessage: "Welcome to my vue App",
        isLoggedIn: !!localStorage.getItem('token')
    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions: {}
};
