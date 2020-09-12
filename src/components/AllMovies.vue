<template>
  <div class="movies">
    <h1>All movies</h1>
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>
        <em>{{ movie.year }}</em>
      </p>
      <p>{{ movie.director }}</p>
      <p>{{ movie.genre }}</p>
      <p>{{ movie.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllMovies",
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "Ace Ventura: Pet Detective",
          year: 1994,
          director: "Tom Shadyac",
          genre: "comedy",
          description:
            "A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins."
        },
        {
          id: 2,
          title: "The Secret Life of Pets",
          year: 2016,
          director: "Chris Renaud, Yarrow Cheney",
          genre: "animation",
          description:
            "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes."
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  padding: 0;
}
</style>
