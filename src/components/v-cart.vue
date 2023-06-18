<script>
import vCartItem from "@/components/v-cart-item.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  computed: {
    ...mapGetters({
      cart: 'CART',
    })
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
        v-for="(item, index) in cart"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCard="deleteFromCard(index)"
    />
    <h3 v-if="!cart.length">Нет добавленных товаров</h3>
  </div>
</template>

<style scoped>
.v-cart {
  display: flex;
  flex-direction: column;
}
</style>