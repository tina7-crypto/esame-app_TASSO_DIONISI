<template>
  <div>
    <b-container class="bv-example-row">
      <form @submit.prevent="onSubmit">
        <p class="h4 text-center mb-4">Suggerisci un prodotto</p>
        

        <b-row>
          <b-col
            ><p>
              <label for="product">Prodotto</label><br>
              <input id="product" required /></p
          ></b-col>
          <b-col>
            <p>
              <label for="brand">Marchio</label><br>
              <input id="brand" required />
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col
            ><p>
              <label for="description">Descrizione</label><br>
              <textarea
                id="description"
                v-model="car.description"
                required
              ></textarea></p
          ></b-col>
          <b-col>
            <p>
              <label for="external_url">Link esterno</label><br>
              <input
                id="external_url"
                type="url"
                v-model="car.external_url"
                required
              /></p
          ></b-col>
        </b-row>

        <b-row>
          <b-col
            ><p>
              <label for="price">Prezzo</label><br>
              <input id="price" required /></p
          ></b-col>
        </b-row>

        <p>
          <b-button variant="info" type="submit" value="Submit">Submit</b-button>

        </p>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      car: {
        inventory: 10,
        onSale: true
      }
    };
  },
  methods: {
    onSubmit: function() {
      this.$store.commit("AGGIUNGI_PRODOTTO", this.article);
      this.$router.push({ name: "ListaProdotti" });
    }
  }
};
</script>

<style scoped>

</style>