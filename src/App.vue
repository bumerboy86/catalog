<template>
  <nav>
    <router-link class="nav-link" to="/" active-class="active-link">Каталог</router-link>
    <router-link to="/cart">
      <v-cart-icon
          :products-number="GET_TOTAL_PRODUCTS_CART"
      />
    </router-link>

  </nav>
  <v-main-vrapper />
</template>

<script>
import vMainVrapper from "./components/v-main-wrapper.vue";
import {mapGetters} from "vuex";
import VCartIcon from "@/components/UI/v-cart-icon.vue";

export default {
  name: 'App',
  components: {
    VCartIcon,
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
body {
  margin: 0;
  padding: 0;
  background: #ced5d7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
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