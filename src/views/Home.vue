<template>
  <div class="home">
    <router-link :to="`/new-movie`">Create a new movie record</router-link>
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
