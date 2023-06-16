<script>
import vCartItem from "@/components/v-cart-item.vue";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCard(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<template>
  <h1>Cart</h1>
  <div class="v-cart">
    <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCard="deleteFromCard(index)"
    />
  </div>
</template>

<style scoped>

</style>