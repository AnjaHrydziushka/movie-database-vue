<template>
  <div id="app">
    <div class="nav">
      <img alt="Popcorn" src="../src/assets/movie.png" width="200" />
    </div>
    <router-view />
  </div>
</template>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
