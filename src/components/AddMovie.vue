<template>
  <div>
    <h1>Add a new movie</h1>
    <form>
      <p>
        <label for="title">Title </label>
        <input id="title" />
      </p>
      <p>
        <label for="year">Year </label>
        <input id="year" />
      </p>
      <p>
        <label for="genre">Genre </label>
        <input id="genre" />
      </p>
      <p>
        <label for="director">Director </label>
        <input id="director" />
      </p>
      <p>
        <label for="description">Description </label>
        <textarea id="description" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
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
