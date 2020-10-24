<template>
  <div class="card" id="productCard">
    <img v-bind:src="'./img/' + imageFileName" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data: function() {
    return {};
  },
  methods: {}
};
</script>
