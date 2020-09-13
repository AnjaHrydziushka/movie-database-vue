<template>
  <div>
    <h1>Add a new movie</h1>
    <p>
      <label for="title">Title</label>
      <input id="title" v-model="title" />
    </p>
    <p>
      <label for="year">Year</label>
      <input id="year" v-model.number="year" />
    </p>
    <p>
      <label for="genre">Genre</label>
      <input id="genre" v-model="genre" />
    </p>
    <p>
      <label for="director">Director</label>
      <input id="director" v-model="director" />
    </p>
    <p>
      <label for="image">Image (URL)</label>
      <input id="image" v-model="image" />
    </p>
    <p>
      <label for="description">Description</label>
      <textarea id="description" v-model="description" />
    </p>
    <button @click="onSubmit">Add movie</button>
    <router-link :to="`/`">Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {}
    };
  },
  methods: {
    onSubmit() {
      let movie = {
        title: this.title,
        year: this.year,
        genre: this.genre,
        director: this.director,
        image: this.image,
        description: this.description
      };
      this.$store.dispatch("onSubmit", movie);
    }
  }
};
</script>

<style scoped>
h1 {
  padding: 0;
}
</style>
