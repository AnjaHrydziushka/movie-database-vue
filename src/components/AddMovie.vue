<template>
  <div>
    <h1>Add a new movie</h1>
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
</style>
