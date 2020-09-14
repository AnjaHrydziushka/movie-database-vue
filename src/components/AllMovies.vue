<template>
  <div class="homepage">
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
</style>
