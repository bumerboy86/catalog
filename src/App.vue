<template>
  <p>Hello</p>
  <v-main-vrapper />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import vMainVrapper from "./components/v-main-wrapper.vue";

export default {
  name: 'App',
  components: {
    vMainVrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
