<template>
  <div>
    <h1>Lista dei Prodotti</h1>
    <b-container>
      <div class="d-inline-flex p-2 bd-highlight">
        <b-row>
          <SchedaProdotto
            v-for="elem in articles"
            :key="elem.id"
            :article="elem"
          ></SchedaProdotto>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import SchedaProdotto from "@/components/SchedaProdotto.vue";

export default {
  components: {
    SchedaProdotto
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    articles: function() {
      return this.$store.state.articles;
    }
  }
};
</script>

<style scoped>
.row {
  float: left;
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 0px;
}
</style>
