<template>
  <div class="home">
    <b-jumbotron
      style="background-color: rgb(222, 246, 253);"
      class="display-4"
      header="Summer Shop"
      lead="Accessori per l'estate"
    >
    </b-jumbotron>

    <ListaProdotti />
    <router-view />
  </div>
</template>

<script>
import ListaProdotti from "@/views/ListaProdotti.vue";
export default {
  components: {
    ListaProdotti
  }
};
</script>

<style></style>
