import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "./components/BaseButton.vue";

import "./assets/style.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.component("BaseButton", BaseButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount ("#app");