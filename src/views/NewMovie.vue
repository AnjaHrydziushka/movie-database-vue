<template>
  <div>
    <AddMovie />
  </div>
</template>

<script>
// @ is an alias to /src
import AddMovie from "@/components/AddMovie.vue";

export default {
  name: "NewMovie",
  components: {
    AddMovie
  }
};
</script>
