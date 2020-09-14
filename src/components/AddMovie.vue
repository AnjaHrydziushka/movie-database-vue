<template>
  <div class="add-movie">
      <div class="title">
        <h1>Add a new movie</h1>
      </div>
      <div class="error">
        <p v-if="error.length">
          <b v-for="(err, index) in error" :key="index">{{ err }}</b>
        </p>
      </div>
      <div class="form">
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
      </div>
      <button @click="onSubmit">Add movie</button>
      <button @click="$router.push(`/`)">Back</button>
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

.add-movie {
  position: absolute;
  transform: translate(-50%, -20%);
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 550px;
  background: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 70px;
  margin-top: 50px;
}

.form-wrapper .title h1 {
  color: orange;
  text-align: center;
  margin-bottom: 25px;
}

.form {
  display: flex;
}

.inputs {
  display: flex;
  flex-direction: column;
  margin-right: 4%;
}

.inputs,
.description {
  width: 48%;
}

.inputs input,
.description textarea {
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid orange;
  padding: 10px;
  color: brown;
  width: 100%;
}

.description textarea {
  height: 459px;
}

label {
  text-align: left;
  margin-right: 150px;
}

@media screen and (max-width: 600px) {
  .form {
    flex-direction: column;
  }
  .description textarea {
    height: 80px;
  }
  .inputs,
  .description {
    width: 100%;
  }
}
</style>
