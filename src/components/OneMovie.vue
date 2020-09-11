<template>
  <div class="movie">
    <h1>Movie title</h1>
  </div>
</template>

<script>
export default {
  name: "OneMovie",
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
