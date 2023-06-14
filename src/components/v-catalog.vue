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
    <div class="v-catalog__list">
      <v-catalog-item/>
      <v-catalog-item/>
      <v-catalog-item/>
    </div>
  </div>
</template>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>