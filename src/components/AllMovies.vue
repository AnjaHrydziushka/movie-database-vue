<template>
  <div>
    <h1>All movies</h1>
    <div class="movies">
      <div v-for="movie in movies" :key="movie.id" class="container">
        <h2>{{ movie.title }}</h2>
        <img :src="movie.image" alt="Movie poster" width="300px" />
        <router-link :to="`/movies/${movie.id}`">More details</router-link>
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
  }
};
</script>

<style scoped>
h1 {
  padding: 0;
}

.movies {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

.container {
  margin-top: 10px;
  width: 25%;
}
</style>
