require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import { routes } from "./routes";

import MainApp from "./src/components/MainApp.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history"
});

const app = new Vue({
    el: "#app",
    router,
    components: {
        MainApp
    }
});
