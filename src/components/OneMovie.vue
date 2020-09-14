<template>
  <div class="movie" v-if="movie">
    <h1>{{ movie.title }}</h1>
    <div class="movie-details">
      <div class="movie-image">
        <img :src="movie.image" :alt="movie.title" width="300px" />
      </div>
      <div class="movie-info">
        <div class="block">
          <p>
            <em>{{ movie.year }}, {{ movie.genre }}</em>
          </p>
          <p>
            <b>Director:</b>
            {{ movie.director }}
          </p>
          <p class="description">{{ movie.description }}</p>
          <button @click="$router.push(`/movies/${movie.id}/edit`)">Edit</button>
          <button @click="$router.push(`/`)">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.getters.oneMovie(parseInt(this.$route.params.id));
    }
  }
};
</script>

<style scoped>
h1 {
  padding: 0;
  margin-bottom: 40px;
}

.movie {
  text-align: center;
  width: 90%;
  margin: auto;
}

.movie-details {
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;
}

.movie-image {
  margin-top: 10px;
  width: 50%;
  background-color: salmon;
}

.movie-info {
  margin-top: 10px;
  width: 50%;
  position: relative;
  background-color: sandybrown;
}

.description {
  text-align: justify;
}

.block {
  position: relative;
  left: 30%;
  top: 30%;
  padding-left: 20px;
  padding-right: 20px;
  -webkit-transform: translate(-30%, -30%);
  -moz-transform: translate(-30%, -30%);
  -ms-transform: translate(-30%, -30%);
  -o-transform: translate(-30%, -30%);
  transform: translate(-30%, -30%);
}

p {
  font-size: larger;
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
