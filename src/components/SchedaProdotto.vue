<template>
<div>

      <b-col class="col-sm-3 col-md-6 col-lg-3 ">
        <div class="d-inline-flex p-2 bd-highlight">
          <div class="article-card">
            <router-link
              class="article-link"
              v-bind:to="{
                name: 'dettaglio-prodotto',
                params: { id: article.id }
              }"
            >
              <h2 class="title">{{ article.product }}</h2>
              <h3 class="eyebrow, article-brand">{{ article.brand }}</h3>
              
        <p v-if="article.inventory > 10">Disponibile</p>
        <p v-else-if="article.inventory > 0">In esaurimento</p>
        <p v-else>Non disponibile</p>
        <p v-show="article.onSale">In vendita!</p>
        
              <p class="article-price">{{ article.price }} euro</p>
            </router-link>
            <BaseButton
              >Compra ora a
              {{ (article.price * 1).toFixed(0) }} euro</BaseButton
            >
          </div>
          <br /><br />
        </div>
      </b-col>

</div>
</template>

<script>
export default {
  props: ["article"],
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.article-card {
  width: 400px;
  height: 300px;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;

  border: 4px;
  border-color: AliceBlue;
  border-style: solid;
  background-color: AliceBlue;
}

.article-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
