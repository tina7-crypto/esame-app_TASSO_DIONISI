import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InserimentoProd from "../views/InserimentoProd.vue";
import ListaProdotti from "../views/ListaProdotti.vue";
import DettaglioProdotto from "../views/DettaglioProdotto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "prod-create",
    component: InserimentoProd
  },

  {
    path: "/listaprodotti",
    name: "lista-prodotti",
    component: ListaProdotti
  },
  {
    path: "/article/:id",
    name: "dettaglio-prodotto",
    component: DettaglioProdotto,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
