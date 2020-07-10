<template>
  <div id="darkmode">
    <div class="dark" v-if="!night">
      <h1 @click= "night = true"> Click on me </h1>
    </div>
    <div class="sun" v-if="night">
      <h1> Well done </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "darkmode",
    data() {
      return {
        night: false,
        light: false
      }
    }
  }
</script>

<style lang="scss">
  #darkmode {
    .dark {
    min-height:100vh;
    width: 100vw;
    background-color: #2c3e50;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
      h1 {
        &:hover {
          cursor: pointer;
          color: orange;
        }
      }
    }
    .sun {
      min-height:100vh;
      width: 100vw;
      background-color: #fffff;
      color: #2c3e50;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
    }
  }
</style>
