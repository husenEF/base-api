
export default {
    state: {
        welcomeMessage: "Welcome to my vue App"
    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions: {}
};
