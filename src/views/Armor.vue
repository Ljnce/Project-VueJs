<template>
  <div id="skulls">
    <div class="halo-title">
      <h1> Api HALO 5 Maps </h1>
    </div>
    <div class="halo-stamp" v-for="skull in skulls" :key="skull.id">
      <div class="halo-text">
        <h1> <strong> {{skull.name}} </strong> </h1>
        <p> {{ skull.description}} </p>
      </div>
      <div class="halo-img">
        <img :src="skull.imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"skulls",
  props: ['skulls']
}

</script>

<style lang="scss">

#skulls {
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

@media (max-width: 767px) {
  #skulls {
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
      flex-direction: column;
      border-bottom:1px solid black;
      .halo-text {
        width: 100%;
        float:none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .halo-img {
        width: 100%;
        float:none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          height:200px;
          opacity: 0.9;
        }
      }
    }
  }
}

</style>
