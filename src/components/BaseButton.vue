<template>
  <div>
    <button class="button-style" @click="addToCart">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart: function() {
      this.$store.commit("AGGIUNGI_CARRELLO");
    }
  }
};
</script>

<style scoped>
.button-style {
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  color: grey;
  padding: 12px 28px;
  border-radius: 2px;
  transition-duration: 0.4s;
}

.button-style:hover {
  background-color: grey;
  color:white;
}

</style>