<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <v-catalog />
    <v-cart
        v-if="CART.length"
        :cart_data="CART"
    />
  </div>
</template>

<script>
import VCatalog from "@/components/v-catalog.vue";
import vCart from "@/components/v-cart.vue";
import {mapGetters} from "vuex";
  export default {
    name: "v-main-wrapper",
    components: {
      VCatalog,
      vCart
    },
    props: {},
    data() {
      return {
        title: "Online-magazine"
      }
    },
    computed: {
      ...mapGetters([
          'CART'
      ])
    },
    methods: {},
    watch: {},
    mounted() {}
  }
</script>

<style>
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;

  }
</style>