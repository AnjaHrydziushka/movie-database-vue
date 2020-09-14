<template>
  <div class="movie" v-if="movie">
    <h1>{{ movie.title }}</h1>
    <p>
      <em>{{ movie.year }} {{ movie.genre }}</em>
    </p>
    <img :src="movie.image" :alt="movie.title" width="300px" />
    <p>{{ movie.director }}</p>
    <p>{{ movie.description }}</p>
    <router-link :to="`/movies/${movie.id}/edit`">Edit</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.getters.oneMovie(parseInt(this.$route.params.id));
    }
  }
};
</script>

<style scoped>
h1 {
  padding: 0;
}
</style>
