<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Summer Shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/create">Suggerisci un prodotto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <p class="text-cart">Carrello ({{ carrello }})</p>
      <b-button variant="light" @click="svuotaCarrello">Svuota</b-button>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    carrello: function() {
      return this.$store.state.carrello;
    },
    numeroProdotti: function() {
      return this.$store.getters.numeroProdotti;
    }
  },
  methods: {
    svuotaCarrello: function() {
      this.$store.commit("SVUOTA_CARRELLO");
    }
  }
};
</script>

<style scoped>
.text-cart {
  margin-top: 0;
  margin-right: 0;
  margin-right: 3px;
  color: white;
  font-weight: bold;
}
</style>
