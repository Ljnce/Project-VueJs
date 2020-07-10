<template>
  <div id="halo">
    <div class="halo-title">
      <h1> Api HALO Vehicles </h1>
    </div>
    <div class="halo-stamp" v-for="car in cars" :key="car.id">
      <div class="halo-text">
        <h1> <strong> {{car.name}} </strong> </h1>
        <h2 style="font-style:italic"> Usable by player: {{car.isUsableByPlayer}} </h2>
        <p> {{ car.description }} </p>
      </div>
      <div class="halo-img">
        <img :src="car.largeIconImageUrl" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"halo",
  props: ['cars']
}

</script>

<style lang="scss">

#halo {
  min-height: 100vh;
  .halo-title {
    height: 200px;
    width:100vw;
    border:1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .halo-stamp {
    height:400px;
    display: flex;
    border-bottom:1px solid black;
    .halo-text {
      width: 40%;
      float:left;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .halo-img {
      width: 60%;
      float:right;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        height:300px;
        opacity: 0.9;
      }
    }
  }
}

</style>
