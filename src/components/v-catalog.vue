<script>
import vCatalogItem from "@/components/v-catalog-item.vue";
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
  return {

  }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    adToCart (data) {
      this.ADD_TO_CART(data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }

}
</script>

<template>
  <div class="v-catalog">
    <h1>E-Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @adToCart="adToCart"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px 5px;
      justify-content: space-around;
    }
  }

</style>