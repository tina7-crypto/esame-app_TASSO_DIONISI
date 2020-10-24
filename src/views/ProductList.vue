<template>
  <div>
    <h1>Lista delle automobili</h1>
    <productCard
      v-for="elem in cards"
      :key="elem.id"
      :product="elem"
    ></productCard>
  </div>
</template>

<script>
import productCard from "@/components/productCard.vue";

export default {
  components: {
    productCard
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    cars: function() {
      return this.$store.state.cars;
    }
  }
};
</script>
