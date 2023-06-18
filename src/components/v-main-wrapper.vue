<template>
  <div class="v-main-wrapper">
      <router-view/>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
  export default {
    name: "v-main-wrapper",
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