require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueCookie from 'vue-cookie'
import { initialize } from './src/helpers/permison'

import { routes } from "./routes";
import StoreData from "./store";

import MainApp from "./src/components/MainApp.vue";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueCookie)

const store = new Vuex.Store(StoreData);
const router = new VueRouter({
    routes,
    mode: "hash"
});

initialize(store, router)

const app = new Vue({
    el: "#app",
    router,
    store,
    components: {
        MainApp
    }
});
