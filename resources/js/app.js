require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import { routes } from "./routes";
import StoreData from "./store";

import MainApp from "./src/components/MainApp.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(StoreData);
const router = new VueRouter({
    routes,
    mode: "hash"
});

const app = new Vue({
    el: "#app",
    router,
    store,
    components: {
        MainApp
    }
});
