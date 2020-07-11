<template>
  <div id="halo">
    <div class="halo-title">
      <h1> Api HALO 5 Missions (ENG) </h1>
    </div>
    <div class="halo-stamp" v-for="data in datas" :key="data.id">
      <div class="halo-text">
        <h1> <strong> {{data.name}} </strong> </h1>
        <h2 style="font-style:italic"> Mission Nr {{data.missionNumber}} </h2>
        <h3> Team: {{data.type}} </h3>
        <p> {{ data.description}} </p>
      </div>
      <div class="halo-img">
        <img :src="data.imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"halo",
  props: ['datas']
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

@media (max-width: 767px) {
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
