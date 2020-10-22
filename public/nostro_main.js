var productCard = new Vue({
  el: "#productCard",
  data: {
    product: "Canon 50mm",
    description:
      "Conveniente obiettivo di alta qualità, perfetto per ritratti creativi e fotografia in condizioni di scarsa illuminazione.",
    imageFileName: "canon_50mm.jpg",

    cards: [
      {
        id: 1,
        name: "Canon 50mm",
        descrizione:
          "Conveniente obiettivo di alta qualità, perfetto per ritratti creativi e fotografia in condizioni di scarsa illuminazione.",
        immagine: "img/canon_50mm.jpg"
      },
      {
        id: 2,
        name: "Canon 6Dm2",
        descrizione:
          "Conveniente obiettivo di alta qualità, perfetto per ritratti creativi e fotografia in condizioni di scarsa illuminazione.",
        immagine: "img/canon_50mm.jpg"
      },
      {
        id: 3,
        name: "Canon 18-135",
        descrizione: "Conveniente obiettivo di alta qualità, perfetto per ritratti creativi e fotografia in condizioni di scarsa illuminazione.",
        immagine: "img/canon_50mm.jpg"
      },
      {
        id: 4,
        name: "Canon 700D",
        descrizione: "Conveniente obiettivo di alta qualità, perfetto per ritratti creativi e fotografia in condizioni di scarsa illuminazione.",
        immagine: "img/canon_50mm.jpg"
      }
    ]
  }
});
