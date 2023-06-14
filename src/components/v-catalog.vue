<script>
import vCatalogItem from "@/components/v-catalog-item.vue";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  }
}
</script>

<template>
  <div class="v-catalog">
    <h1>Catalog </h1>
    <v-catalog-item/>
    <v-catalog-item/>
    <v-catalog-item/>
  </div>
</template>

<style scoped>

</style>