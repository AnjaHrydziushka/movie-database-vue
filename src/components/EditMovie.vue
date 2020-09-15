<template>
  <div class="edit-movie">
    <div class="title">
      <h1>Edit movie:</h1>
    </div>
    <div class="error" v-if="error.length">
      <p v-for="(err, index) in error" :key="index">
        {{ err }}
      </p>
    </div>
    <div class="form">
      <div class="inputs">
        <label for="title">Title</label>
        <input v-model="title" />

        <label for="year">Year</label>
        <input v-model="year" type="number" />

        <label for="genre">Genre</label>
        <select v-model="genre">
          <option default disabled>{{ movie.genre }}</option>
          <option>comedy</option>
          <option>drama</option>
          <option>animation</option>
          <option>horror</option>
          <option>romance</option>
        </select>

        <label for="director">Director</label>
        <input v-model="director" />

        <label for="image">Image (URL)</label>
        <input v-model="image" placeholder="Add link to a new porter image" />
      </div>
      <div class="description">
        <label for="description">Description</label>
        <textarea v-model="description" />
      </div>
    </div>
    <button @click="saveChanges">Save changes</button>
    <button @click="$router.push(`/movies/${movie.id}`)">Back</button>
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
  computed: {
    movie() {
      return this.$store.getters.oneMovie(parseInt(this.$route.params.id));
    }
  },
  created() {
    this.title = this.movie.title;
    this.year = this.movie.year;
    this.director = this.movie.director;
    this.genre = this.movie.genre;
    this.image = this.movie.image;
    this.description = this.movie.description;
  },
  methods: {
    saveChanges(e) {
      this.error = [];
      if (
        this.title &&
        this.year &&
        this.director &&
        this.genre &&
        this.image &&
        this.description
      ) {
        let newMovie = {
          id: parseInt(this.$route.params.id),
          title: this.title,
          year: this.year,
          genre: this.genre,
          director: this.director,
          image: this.image,
          description: this.description
        };
        this.$store.dispatch("saveChanges", newMovie);
        this.$router.push(`/`);
      } else {
        this.error.push("Please, fill all the fields.");
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
  background-color: #0196e5;
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

.edit-movie {
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
  color: #0196e5;
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
  border-bottom: 2px solid #0196e5;
  padding: 10px;
  color: gray;
  width: 100%;
}

select {
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid #0196e5;
  padding: 10px;
  color: gray;
  width: 100%;
}

.description textarea {
  height: 333px;
}

label {
  text-align: left;
  margin-right: 150px;
}

.error {
  color: red;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .form {
    flex-direction: column;
  }
  .edit-movie {
    width: 75%;
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
