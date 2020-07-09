<template>
  <div id="test">
    <div class=container-test>
      <h1> Welcome to my test page </h1>
    </div>
    <div class="container-push">
      <input v-model="test" placeholder="Inserisci un numero">
      <h1> {{test}} </h1>
      <h1 @click="numbers.push(test)">ciao</h1>
    </div>
    <div class="container-for" v-for="(number, index) in numbers" :key="index">
        <p> {{number}} </p>
    </div>
  </div>
</template>

<script>

  export default {
    name : "Test",
    data () {
      return {
        numbers : [],
      }
    }
  }

</script>

<style>

#test {
  height:500px;
  width:100%;
}

</style>
