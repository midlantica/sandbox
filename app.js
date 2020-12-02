const app = Vue.createApp({
  data() {
    return {
      url: 'http://drewharper.com',
      showBooks: true,
      books: [
        {
          title: 'Name of the Wind',
          author: 'Fred Johnson',
          img: '1.jpg',
          isFav: true,
        },
        {
          title: 'The Way of Kings',
          author: 'Mildred Honeycutt',
          img: '2.jpg',
          isFav: false,
        },
        {
          title: 'The Final Empire',
          author: 'Mac Wilson',
          img: '3.jpg',
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleIsFav(book) {
      console.log(book, 'book is fav');
      book.isFav = !book.isFav;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
