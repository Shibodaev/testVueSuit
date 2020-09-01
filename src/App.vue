<template>
  <div id="app">
    <main>
      <router-link to="about">About</router-link>
    </main>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "~normalize.css";

// @import '~bootstrap';
// @import '~bootstrap-vue';

@import '"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"';
@import "~pixel-glass/styles.css";

html {
  background-repeat: no-repeat;
  background-position: 50% 0;
  /* Mobile layout by default */
  background-image: url("./assets/320.png");
}
/* Tablet */
@media (min-width: 760px) {
  html {
    /* Tablet layout */
    background-image: url("./assets/760.png");
  }
}
/* Desktop */
@media (min-width: 960px) {
  html {
    /* Desktop layout */
    background-image: url("./assets/960.png");
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
