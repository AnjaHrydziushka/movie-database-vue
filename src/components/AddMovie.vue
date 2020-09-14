<template>
  <div class="add-movie">
    <div class="title">
      <h1>Add a new movie</h1>
    </div>
    <div class="form">
      <div class="error">
        <p v-if="error.length">
          <b v-for="(err, index) in error" :key="index">{{ err }}</b>
        </p>
      </div>
      <div class="inputs">
        <p>
          <label for="title">Title</label>
          <input v-model="title" />
        </p>
        <p>
          <label for="year">Year</label>
          <input v-model.number="year" />
        </p>
        <p>
          <label for="genre">Genre</label>
          <input v-model="genre" />
        </p>
        <p>
          <label for="director">Director</label>
          <input v-model="director" />
        </p>
        <p>
          <label for="image">Image (URL)</label>
          <input v-model="image" />
        </p>
      </div>
      <div class="description">
        <p>
          <label for="description">Description</label>
          <textarea v-model="description" />
        </p>
      </div>
      <div class="buttons">
        <button @click="onSubmit">Add movie</button>
        <button @click="$router.push(`/`)">Back</button>
      </div>
    </div>
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
        this.$router.push(`/`);
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

button {
  background-color: lightgreen;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  margin-bottom: 8px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
