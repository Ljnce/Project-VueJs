<template>
  <div id="nav">
    <router-link to="/"> Home </router-link> |
    <router-link to="/portfolio"> Portfolio </router-link> |
    <router-link to="/test"> Test </router-link>
  </div>
</template>

<script>

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
    }
    &:hover {
      color:orange;
    }
  }
}
</style>
