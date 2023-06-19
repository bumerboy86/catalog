<script>
import vCatalogItem from "@/components/catalog/v-catalog-item.vue";
import vSelect from "@/components/v-select.vue";
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect
  },
  props: {},
  data() {
  return {
    sortedProducts: [],
  }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    filteredProducts() {
      if(this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart (data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(data) {
      this.sortedProducts = [];
      const productsArray = Object.values(this.PRODUCTS);
      this.sortedProducts = productsArray.filter(item => item.category === data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }

}
</script>

<template>
  <div class="v-catalog">
    <h1>Е-Каталог</h1>
    <v-select
      @emitOptionValue="sortByCategories"
    />
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @adToCart="addToCart"
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