<template>
  <div>
    <h1>{{ car.brand }} - {{ car.product }}</h1>
    <p>
      {{ car.description }}. Per maggiori dettagli,
      <a v-bind:href="car.external_url" target="_blank">visita il sito</a>!
    </p>
    <p v-if="car.inventory > 10">Disponibile</p>
    <p v-else-if="car.inventory > 0">In esaurimento</p>
    <p v-else>Non disponibile</p>
    <p v-show="car.onSale">In vendita!</p>
    <p>Acquistala a {{ car.price }} euro !</p>
    <p>
      <router-link v-bind:to="{ name: 'car-list' }"
        >Torna alla lista</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data: function() {
    return {
      car: {}
    };
  },
  created: function() {
    this.car = this.$store.getters.getCarById(Number(this.id));
    //this.car = this.$store.state.cars[Number(this.id)];
  }
};
</script>
