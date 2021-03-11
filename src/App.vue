<template>
  <div id="app">
    <my-input v-model="message" />
  </div>
</template>

<script>
import MyInput from "./components/MyInput.vue"

export default {
  name: "app",
  components: {
    MyInput,
  },
  data() {
    return {
      message: "Hello from web component",
    }
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
