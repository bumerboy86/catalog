<script>
import { reactive } from "vue";
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    const cartItemData = reactive(props.cart_item_data);
    cartItemData.quantity = 1;
    return cartItemData
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
  },
  methods: {
    deleteFromCard() {
      this.$emit('deleteFromCard');
    }
  }
}
</script>

<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require(`../assets/images/${cart_item_data.image}`)" alt="img">
    <div class="v-cart-item__info">
      <p class="v-cart-item__name">{{cart_item_data.name}}</p>
      <p class="v-cart-item__price">Price {{cart_item_data.price}} тг.</p>
      <p class="v-cart-item__article">{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">{{cart_item_data.quantity}}</div>
    <button @click="deleteFromCard">Del</button>
  </div>
</template>

<style lang="scss">
  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    border: none;
    padding: $padding $padding*2;
    border-radius: $radius;
    &__image {
      max-width: 50px;
    }
  }
</style>