<template>
  <div id="form">
  <form
id="app-form"
@submit="checkForm"
action="https://vuejs.org/"
method="post"
>

<p v-if="errors.length">
  <b>Please correct the following error(s):</b>
  <ul>
    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
  </ul>
</p>

<p>
  <label for="name">Name</label>
  <input
    id="name"
    v-model="name"
    type="text"
    name="name"
  >
</p>

<p>
  <label for="age">Age</label>
  <input
    id="age"
    v-model="age"
    type="number"
    name="age"
    min="0"
  >
</p>

<p>
  <label for="movie">Favorite Movie</label>
  <select
    id="movie"
    v-model="movie"
    name="movie"
  >
    <option>Star Wars</option>
    <option>Vanilla Sky</option>
    <option>Atomic Blonde</option>
  </select>
</p>

<p>
  <input
    type="submit"
    value="Submit"
  >
</p>

</form>
  </div>
</template>

<script>

export default {
  name: "app-form",
    data (){
      return {
        errors: [],
        name: null,
        age: null,
        movie: null
      }
    },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
  }


</script>
