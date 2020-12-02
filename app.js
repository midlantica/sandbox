const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'Name of the Wind', author: 'Fred Johnson' },
        { title: 'The Way of Kings', author: 'Mildred Honeycutt' },
        { title: 'The Final Empire', author: 'Mac Wilson' },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
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
});

app.mount('#app');
