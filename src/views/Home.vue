<template>
  <div id="home">
    <h1>Benvenuto nel mio progetto Vue Js</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2> Scegli una pagina e naviga tra i miei test VueJs </h2>
  </div>
</template>

<script>

export default {
  name: "Home"
};

</script>


<style>

#home {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
