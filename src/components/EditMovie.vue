<template>
  <div v-if="movie">
    <h2>Edit movie:</h2>
    <p>
      <label for="title">Title</label>
      <input id="title" v-model="title" :placeholder="movie.title" />
    </p>
    <p>
      <label for="year">Year</label>
      <input id="year" v-model="year" :placeholder="movie.year" />
    </p>
    <p>
      <label for="genre">Genre</label>
      <input id="genre" v-model="genre" :placeholder="movie.genre" />
    </p>
    <p>
      <label for="director">Director</label>
      <input id="director" v-model="director" :placeholder="movie.director" />
    </p>
    <p>
      <label for="image">Image (URL)</label>
      <input id="image" v-model="image" />
    </p>
    <p>
      <label for="description">Description</label>
      <textarea id="description" v-model="description" :placeholder="movie.description" />
    </p>
    <button @click="saveChanges">Save changes</button>
    <router-link :to="`/movies/${movie.id}`">Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      year: null,
      director: null,
      genre: null,
      image: null,
      description: null
    };
  },
  computed: {
    movie() {
      return this.$store.getters.oneMovie(parseInt(this.$route.params.id));
    }
  },
  methods: {
    saveChanges(e) {
      if (
        this.title &&
        this.year &&
        this.director &&
        this.genre &&
        this.image &&
        this.description
      ) {
        let newMovie = {
          id: this.$route.params.id,
          title: this.title,
          year: this.year,
          genre: this.genre,
          director: this.director,
          image: this.image,
          description: this.description
        };
        this.$store.dispatch("saveChanges", newMovie);
        this.$router.push(`/`);
        e.preventDefault();
      }
    }
  }
};
</script>

<style scoped>
h1 {
  padding: 0;
}
</style>
