<template>
  <div id="nav">
    <router-link to="/"> Home </router-link> |
    <router-link to="/portfolio"> Portfolio </router-link> |
    <router-link to="/test"> Test </router-link> |
    <router-link to="/darkmode"> Dark Mode </router-link> |
    <router-link to="/Form"> Form </router-link> |
    <router-link to="/api"> Halo 5 Mission </router-link> |
    <router-link to="/Vehicles"> Vehicles Halo </router-link>
  </div>
</template>

<script>

export default {
  name: "nav",
}
</script>

<style lang="scss">
#nav {
  padding-top: 20px;
  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    &.router-link-exact-active {
      color: orange;
      font-weight: bold;
      font-size:20px;
    }
    &:hover {
      color:orange;
    }
  }
}
</style>
