<template>
  <div class="about">
    <OneMovie />
  </div>
</template>

<script>
// @ is an alias to /src
import OneMovie from "@/components/OneMovie.vue";

export default {
  name: "Home",
  components: {
    OneMovie
  }
};
</script>
