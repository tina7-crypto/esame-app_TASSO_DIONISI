<template>
  <div class="product-box">
    <div id="model">
      <img
        v-bind:src="
          'public/assets/img' +ImageFileName
        "
      />
    </div>

    <div>
      <div class="info-base">
        <h1>{{ article.product }}</h1>
        <p class="bold-descr">
          {{ article.description }}. Per maggiori dettagli,
          <a v-bind:href="article.external_url" target="_blank"
            >visita il sito</a
          >!
        </p>
      </div>
      <p v-if="article.inventory > 10">Disponibile</p>
      <p v-else-if="article.inventory > 0">In esaurimento</p>
      <p v-else>Non disponibile</p>
      <p v-show="article.onSale">In vendita!</p>
      <p>Acquista a €{{ article.price }}!</p>
      <div>
        <p
          style="color:teal;text-align:center;font-weight:bold;font-size: 1.3em;"
        >
          Caratteristiche:
        </p>
        <ul>
          <li v-for="feature in article.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </div>
      <div>
        <p
          style="color:teal;text-align:center;font-weight:bold;font-size: 1.3em;"
        >
          Attenzione:
        </p>
        <ul>
          <li v-for="care in article.care" :key="care">{{ care }}</li>
        </ul>
      </div>
      <div>
        <p
          style="color:teal;text-align:center;font-weight:bold;font-size: 1.3em;"
        >
          Modelli ({{ article.models.length }})
        </p>
        <ul>
          <li v-for="(model, index) in article.models" :key="model.id">
            <!-- <p @mouseover="updateModel(index)" :style="{color: model.color}"> -->
            <p @mouseover="updateModel(index)" :style="{ color: model.color }">
              {{ model.name }}
            </p>
          </li>
        </ul>
      </div>
      <!--
        <product-details v-bind:details="optionals"></product-details>
        <p>Modelli ({{models.length}})</p>
    <ul>
        <li v-for="(model, index) in models" :key="model.id">
            <p @mouseover="updateModel(index)" :style="{color: model.color}">
                {{model.name}}
            </p>
        </li>
    </ul>-->
      <BaseButton>Aggiungi al carrello </BaseButton>

      <p>
        <router-link v-bind:to="{ name: 'Home' }">Torna alla Home</router-link>
      </p>
    </div>
  </div>
</template>

<script>
/*
Vue.component ("product-details", {
  props: {
    details: {
      type: Array,
      default: [],
      required: true,
    },
  }});
*/

import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton
  },
  props: ["id"],
  data: function() {
    return {
      article: {}
    };
  },
  created: function() {
    //this.article = this.$store.getters.getArticleById(Number(this.id));
    this.article = this.$store.state.articles[Number(this.id)];
  },
  methods: {
    addToCart: function() {
      this.$emit("add-to-cart", this.models[this.selectedModel].id);
    }
  }
};
</script>

<style scoped></style>
