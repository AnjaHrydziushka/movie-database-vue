<template>
  <div class="home">
    <img alt="Popcorn" src="../assets/movie.png" />
    <HelloWorld msg="Movie Database with Vue" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
