import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import authModules from "./modules/auth";

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ["auth.token"],
});

const store = new Vuex.Store({
  modules: {
    auth: authModules,
  },
  plugins: [dataState],
});

export default store;
