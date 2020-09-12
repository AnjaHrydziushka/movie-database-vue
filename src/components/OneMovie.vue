<template>
  <div class="movie">
    <h1>Page of the movie with ID {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "OneMovie"
};
</script>

<style scoped>
h1 {
  padding: 0;
}
</style>
