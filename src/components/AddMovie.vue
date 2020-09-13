<template>
  <div>
    <h1>Add a new movie</h1>
    <p v-if="error.length">
      <b v-for="(err, index) in error" :key="index">{{ err }}</b>
    </p>
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
      title: null,
      year: null,
      director: null,
      genre: null,
      image: null,
      description: null,
      error: []
    };
  },
  methods: {
    onSubmit(e) {
      if (
        this.title &&
        this.year &&
        this.director &&
        this.genre &&
        this.image &&
        this.description
      ) {
        let movie = {
          id: new Date().getTime(),
          title: this.title,
          year: this.year,
          genre: this.genre,
          director: this.director,
          image: this.image,
          description: this.description
        };
        this.$store.dispatch("onSubmit", movie);
        this.title = null;
        this.year = null;
        this.director = null;
        this.genre = null;
        this.image = null;
        this.description = null;
      } else {
        if (
          !this.title ||
          !this.year ||
          !this.genre ||
          !this.director ||
          !this.image ||
          !this.description
        )
          this.error.push("Please, fill in all the fields.");
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
