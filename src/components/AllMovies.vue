<template>
  <div class="homepage">
    <h1>All movies</h1>
    <div class="movies">
      <div v-for="movie in movies" :key="movie.id" class="container">
        <h2>{{ movie.title }}</h2>
        <img :src="movie.image" alt="Movie poster" width="300px" />
        <button @click="$router.push(`/movies/${movie.id}`)">
          About movie
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: []
    };
  },
  mounted() {
    this.movies = this.$store.getters.getMovies;
  },
  methods: {
    button() {
      this.$router.push(`/new-movie`);
    }
  }
};
</script>

<style scoped>
.homepage {
  text-align: center;
  width: 90%;
  margin: auto;
}

h1 {
  padding: 0;
}

.movies {
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.container {
  margin: 10px;
  width: 25%;
  flex-direction: column;
  border: 1px solid lightgrey;
}

img {
  height: 500px;
  object-fit: cover;
}

button {
  background-color: lightgreen;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  margin-bottom: 8px;
}
</style>
