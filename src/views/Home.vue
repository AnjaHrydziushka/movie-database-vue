<template>
  <div class="home">
    <button @click="$router.push(`/new-movie`)">Add new movie</button>
    <AllMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import AllMovies from "@/components/AllMovies.vue";

export default {
  name: "Home",
  components: {
    AllMovies
  }
};
</script>

<style scoped>
button {
  background-color: red;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  margin-bottom: 8px;
}
</style>
