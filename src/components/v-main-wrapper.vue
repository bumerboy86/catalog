<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import VCatalog from "@/components/v-catalog.vue";
import vCart from "@/components/v-cart.vue";
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
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log("Mounted main wrapper")
    }
  }
</script>

<style>
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;

  }
</style>