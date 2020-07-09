<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  }
}

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Raleway:wght@300&display=swap');
#app {
  font-family: 'Courier Prime', sans-serif;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
