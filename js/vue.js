var app = new Vue ({
  el: '#app',
  data: {
    introduction: 'Graphic Tees, les t-shirts pour femme et homme Les t-shirts avec une touche nostalgique ou geek sont un must de n’importe quel placard. Faciles à combiner, ils dépoussièrent n’importe quel look et sont super tendance. Nous faisons revivre les icônes de la musique, des séries et de la culture populaire avec les nouveaux t-shirts pour femme et homme de TEES&TIGERS.',
    brands: [
      {
        id: 0,
        name: 'Graphic Tees',
        tag: 'Graphic Tees, les t-shirts pour femme et homme',
        description: 'Les t-shirts avec une touche nostalgique ou geek sont un must de n’importe quel placard. Faciles à combiner, ils dépoussièrent n’importe quel look et sont super tendance. Nous faisons revivre les icônes de la musique, des séries et de la culture populaire avec les nouveaux t-shirts pour femme et homme de TEES&TIGERS.'
      },
      {
        id: 1,
        name: 'Coca-Cola',
        tag: 'T-shirts Coca-Cola',
        description: 'Crée des combinaisons fraîches et estivales avec les t-shirts Coca-Cola, Fanta ou Sprite, parfaits pour égayer ta tenue avec ton bermuda ou jean favori.'
      },
      {
        id: 2,
        name: 'Disney',
        tag: 'T-shirts Disney',
        description: 'Plonge dans tes souvenirs d’enfance et adopte le style naïf avec les t-shirts Disney. Associe-les avec une paire de jeans troués, une veste oversize ou une casquette pour donner de la personnalité à ton look nostalgique'
      },
      {
        id: 3,
        name: 'Elite',
        tag: 'T-shirts de Netflix Élite',
        description: 'Découvre les t-shirts et sweats de Netflix Elite les plus prisés du moment. T-shirts blancs ou noirs avec le logo de la série Elite et sweats de style universitaire.'
      },
      {
        id: 4,
        name: 'Movies',
        tag: '',
        description: ''
      },
      {
        id: 5,
        name: 'Lego',
        tag: 'T-shirts de Lego',
        description: 'Trouvez les T-shirts Lego les plus nostalgiques. Disponibles pour femmes et pour hommes. T-shirts blancs ou noirs avec le logo Lego pour créer des looks tendance.'
      },
      {
        id: 6,
        name: 'Rock Bands',
        tag: '',
        description: ''
      },
      {
        id: 7,
        name: 'Pop Culture',
        tag: '',
        description: ''
      },
      {
        id: 8,
        name: 'Video Games',
        tag: '',
        description: ''
      },
      {
        id: 9,
        name: 'Kodak',
        tag: '',
        description: ''
      },
      {
        id: 10,
        name: 'Looney Tunes',
        tag: 'T-shirts Looney Tunes',
        description: 'Drôles et casual, ne rate pas les t-shirts Looney Tunes avec tes personnages préférés : Bugs Bunny, Grosminet ou Taz.'
      },
      {
        id: 11,
        name: 'Marvel',
        tag: 'T-shirts Marvel',
        description: 'Pour les fans et fervents lecteurs de cet univers cinématographique, les t-shirts Marvel ou Avengers sont l’option parfaite pour apporter une touche spéciale à des vêtements plus simples.'
      },
      {
        id: 9,
        name: 'Kodak',
        tag: '',
        description: ''
      }
    ],
    products: [
      {
        id: 1,
        name: 'T-shirt noir Edward aux mains d\'argent',
        brand_id: 4,
        price: 15.99,
      },
      {
        id: 1,
        name: 'Yellow Kodak T-shirt',
        brand_id: 4,
        price: 15.99,
      },
      {
        id: 4,
        name: 'T-shirt Blanche-Neige manches courtes',
        brand_id: 4,
        price: 15.99,
      },
      {
        id: 1,
        name: 'T-shirt Disney Daisy cœur',
        brand_id: 4,
        price: 15.99,
      },
      {
        id: 5,
        name: 'Sweat Biggie oversize',
        brand_id: 4,
        price: 15.99,
      },
      {
        id: 8,
        name: 'Sweat Biggie oversize',
        brand_id: 4,
        price: 15.99,
      },
      {
        id: 1,
        name: 'Sweat Biggie oversize',
        brand_id: 4,
        price: 15.99,
      },
    ],
    styleQuote: {
      height: '',
      backgroundColor: '',
    }
  },
  methods: {
    shuffle: function() {
      this.quotes = _.shuffle(this.quotes),
      this.images = _.shuffle(this.images)
    }
  }
}) // END VUE
