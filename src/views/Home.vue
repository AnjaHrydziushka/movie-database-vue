<template>
  <div class="home">
    <HelloWorld msg="Movie Database with Vue" />
    <AllMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AllMovies from "@/components/AllMovies.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    AllMovies
  }
};
</script>
