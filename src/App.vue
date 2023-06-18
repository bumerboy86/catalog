<template>
  <nav>
    <router-link class="nav-link" to="/" active-class="active-link">Home</router-link>
    <router-link class="nav-link" to="/cart" active-class="active-link">Cart {{GET_TOTAL_PRODUCTS_CART}}</router-link>
  </nav>
  <v-main-vrapper />
</template>

<script>
import vMainVrapper from "./components/v-main-wrapper.vue";
import {mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    vMainVrapper
  },
  computed: {
    ...mapGetters([
        'CART',
        'GET_TOTAL_PRODUCTS_CART'
    ])
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
nav {
  display: flex;
  max-width: 900px;
  margin: 0 auto;
}
.nav-link {
  text-decoration: none;
  padding: 6px 17px;
  border-right: 1px solid #2c3e50;
  color: #2c3e50;
}

.active-link {
  font-weight: bold;
}
</style>