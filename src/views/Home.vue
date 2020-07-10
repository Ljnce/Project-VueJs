<template>
  <div id="home">
    <h1>Benvenuto nel mio progetto Vue Js</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2> Scegli una pagina e naviga tra i miei test VueJs </h2>
    <div class= "link">
      <router-link to="/portfolio"> Portfolio </router-link>
      <router-link to="/test"> Test </router-link>
      <router-link to="/darkmode"> Dark Mode </router-link>
      <router-link to="/Form"> Form </router-link>
      <router-link to="/api"> Halo 5 Mission </router-link>
      <router-link to="/Vehicles"> Vehicles Halo </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home"
};

</script>


<style lang="scss">

#home {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .link {
  padding-top: 20px;
  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    &.router-link-exact-active {
      color: orange;
      font-weight: bold;
      font-size:30px;
    }
    &:hover {
      color:orange;
    }
  }
  }
}

</style>
