<template>
  <div class="home">
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
