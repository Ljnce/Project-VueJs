<template>
  <div id="app">
      <Navigation/>
      <router-view :datas="datas" :cars="cars"/>
      <Footer />
  </div>
</template>

<script>

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import axios from 'axios';

export default {
  name: "App",
  data () {
    return {
      datas: null,
      cars: null,
    }
  },
  mounted () {
    axios
    .get('https://www.haloapi.com/metadata/h5/metadata/campaign-missions', {
      headers: {
      'Ocp-Apim-Subscription-Key': '',
      "Content-Type": "application/json"
      }
    })
    .then(response => {
    this.datas = response.data
    }),
    axios
    .get('https://www.haloapi.com/metadata/h5/metadata/vehicles', {
      headers: {
      'Ocp-Apim-Subscription-Key': '',
      "Content-Type": "application/json"
      }
    })
    .then(response => {
    this.cars = response.data
    })
  },
  components: {
    Navigation,
    Footer
  },
  filters: {
    decimal (value) {
      return value.toFixed(2)
    }
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
