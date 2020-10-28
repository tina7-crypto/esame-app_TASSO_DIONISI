import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: 0,
        product: "Calze",
        description: "Calzini prodotti con cotone organico 100%",
        selectedModel: 0,
        external_url: "https://a-dam.com/collection/socks/",
        onSale: true,
        inventory: 10,
        price: 10,
        features: [
          "84% cotone organico, 1% elastane",
          "15% econyl per la flessibilità",
          "Bottoni in poliestere riciclato per evitare di perdere i calzini dentro la lavatrice",
          "Ricami con personaggi"
        ],
        care: [
          "lavare a max 40°C",
          "Unire i calzini con il bottone prima di lavarli",
          "Non asciugare in asciugatrice"
        ],
        models: [
          {
            id: 1,
            name: "Furby",
            imageFileName: "furby_1.jpg",
            color: "green",
            inventory: 3
          },
          {
            id: 2,
            name: "Pac-Man",
            imageFileName: "pacman_1.jpg",
            color: "burgundy",
            inventory: 5
          },
          {
            id: 3,
            name: "Pesce",
            imageFileName: "pesce_1.jpg",
            color: "black",
            inventory: 20
          },
          {
            id: 4,
            name: "Beatles",
            imageFileName: "beatles_1.jpg",
            color: "black",
            inventory: 20
          }
        ]
      },
      {
        id: 1,
        product: "Costume",
        description: "Costumi prodotti con poliestere 100% riciclato",
        selectedModel: 0,
        external_url: "https://a-dam.com/collection/swimwear",
        onSale: true,
        inventory: 8,
        price: 70,
        features: [
          "100% poliestere riciclato by waste2wear",
          "Fodera interna comoda",
          "Asciugatura rapida",
          "Tasca segreta"
        ],
        care: [
          "lavare a max 30°C",
          "Lavare al rovescio",
          "Non asciugare in asciugatrice",
          "Non stirare"
        ],
        models: [
          {
            id: 1,
            name: "Anatra",
            imageFileName: "duck_1.jpg",
            color: "black",
            inventory: 3
          },
          {
            id: 2,
            name: "Marylin",
            imageFileName: "marylin_1.jpg",
            color: "blue",
            inventory: 5
          },
          {
            id: 3,
            name: "Orca",
            imageFileName: "whale_1.jpg",
            color: "blue",
            inventory: 20
          },
          {
            id: 4,
            name: "Limoni",
            imageFileName: "lemon_1.jpg",
            color: "aqua marine",
            inventory: 10
          } //id
        ] //models
      },
      {
        id: 2,
        product: "T-Shirt",
        description: "T-Shirt con ricami in cotone 100% organico",
        selectedModel: 0,
        external_url: "https://a-dam.com/collection/t-shirts-female",
        onSale: true,
        inventory: 25,
        price: 40,
        features: [
          "100% cotone organico",
          "Cotone spesso 220g",
          "Cotone prelavato",
          "Tessuto ricamato"
        ],
        care: [
          "lavare a max 30°C",
          "Lavare al rovescio",
          "Lavare con i capi bianchi",
          "Non asciugare in asciugatrice"
        ],
        models: [
          {
            id: 1,
            name: "Dinosauro",
            imageFileName: "dino_1.jpg",
            color: "black",
            inventory: 3
          },
          {
            id: 2,
            name: "Ritorno al Futuro",
            imageFileName: "future_1.jpg",
            color: "black",
            inventory: 5
          },
          {
            id: 3,
            name: "Mondrian",
            imageFileName: "mondrian_1.jpg",
            color: "black",
            inventory: 20
          },
          {
            id: 4,
            name: "Pignatta",
            imageFileName: "pignatta_1.jpg",
            color: "black",
            inventory: 10
          } //id
        ] //models
      },
      {
        id: 3,
        product: "Maschera",
        description: "Maschera protettiva in cotone organico",
        selectedModel: 0,
        external_url: "https://a-dam.com/collection/masks",
        onSale: true,
        inventory: 15,
        price: 10,
        features: [
          "95% cotone organico, 5% elastane",
          "Prodotto dai nostri scarti di tessuto",
          "SA8000 Standard"
        ],
        care: [
          "lavare a max 30°C",
          "Lavare con colori simili",
          "Non asciugare in asciugatrice"
        ],
        models: [
          {
            id: 1,
            name: "Pioggia",
            imageFileName: "aqua-mask_1.jpg",
            color: "blue",
            inventory: 5
          },
          {
            id: 2,
            name: "Volpe",
            imageFileName: "fox-mask_1.jpg",
            color: "blue",
            inventory: 5
          },
          {
            id: 3,
            name: "Peperoncini",
            imageFileName: "pepper-mask_1.jpg",
            color: "green",
            inventory: 20
          },
          {
            id: 4,
            name: "Astronauti",
            imageFileName: "spaceboy_1.jpg",
            color: "black",
            inventory: 10
          } //id
        ] //models
      }
    ], //posiziona prima di questa parentesi
    carrello: 0,
  
  },
  mutations: {
    AGGIUNGI_CARRELLO: function(state) {
      state.carrello++;
    },
    SVUOTA_CARRELLO: function(state) {
      state.carrello = 0;
    },
    AGGIUNGI_PRODOTTO: function(state, article) {
      article.id = state.prossimoId;
      state.prossimoId++;
      state.articles.push(article);
    }
  },
  actions: {},
  modules: {},
  getters: {
    nomeEsteso: function(state) {
      return state.utente.nome + " " + state.utente.cognome;
    },
    getArticleById: state => id => {
      return state.article[id - 1];
    },
  },

  methods: {
    updateModel: function (index) {
      this.selectedModel = index;
    },
  },


  computed: {
    title: function () {
      return this.models[this.selectedModel] + " (" + this.name + ")";
    },
    imageFileName: function () {
      return this.article.models[this.selectedModel].imageFileName;
    },
    inventory: function () {
      return this.models[this.selectedModel].inventory;
    },
  },
});

