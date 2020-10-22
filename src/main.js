import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

var productCard = new Vue({
  el: "#productCard",
  data: {
    product: "Canon 50mm",
    description:
      "Conveniente obiettivo di alta qualità, perfetto per ritratti creativi e fotografia in condizioni di scarsa illuminazione.",
    imageFileName: "canon_50mm.jpg"
  }
});
