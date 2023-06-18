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
    }),
    cartTotalCost() {
      if (this.cart.length) {
        const arr = [...this.cart];
        return arr.reduce((total, item) => {
          // eslint-disable-next-line no-prototype-builtins
          if (item.hasOwnProperty('quantity') && item.hasOwnProperty('price')) {
            return total + (item.price * item.quantity);
          }
          return total;
        }, 0);
      } else {
        return 0;
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_FROM_CART',
      'DECREMENT_FROM_CART'
    ]),
    deleteFromCard(index) {
      this.DELETE_FROM_CART(index)
    },
    decrement(index) {
      this.DECREMENT_FROM_CART(index)
    },
    increment(index) {
      this.INCREMENT_FROM_CART(index)
    },
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
        @decrementItem="decrement(index)"
        @incrementItem="increment(index)"
    />
    <h3 v-if="!cart.length">Нет добавленных товаров</h3>
  </div>
  <div class="v-cart__totalCost">
    <span class="v-cart__totalCostSpan">Общая стоимость: </span>
    <span>{{Math.round(parseFloat(cartTotalCost.toFixed(1)))}} тг.</span>
   </div>
</template>

<style lang="scss">
.v-cart {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 80px;
  &__totalCost {
    display: flex;
    padding: 20px 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #334354;
    color: #e0e0e0;
    align-items: center;
    justify-content: center;
  }
  &__totalCostSpan {
    margin-right: 10px;
  }
}
@media screen and(max-width: 500px) {
  .v-cart {
    &__totalCost {
      flex-direction: column;
    }
  }
}
</style>