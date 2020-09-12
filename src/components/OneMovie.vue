<template>
  <div class="movie">
    <h1>Page of the movie with ID</h1>
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
