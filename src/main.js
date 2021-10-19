import Vue from "vue";
import VueRouter from "vue-router";
import Notification from "vue-notification";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./assets/scss/index.scss";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Notification);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
