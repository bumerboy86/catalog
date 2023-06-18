<script>
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
      <p class="v-cart-item__text">{{cart_item_data.name}}</p>
      <p class="v-cart-item__text">Price {{cart_item_data.price}} тг.</p>
      <p class="v-cart-item__text">{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">{{cart_item_data.quantity}} шт.</div>
    <button class="v-cart-item__delete-btn" @click="deleteFromCard">Удалить</button>
  </div>
</template>

<style lang="scss">
  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    border: none;
    padding: $padding $padding*2;
    border-radius: $radius;
    box-shadow: 2px 2px #6e6c6c;
    margin: 10px;
    &__image {
      max-width: 50px;
    }
    &__text {
      text-align: left;
    }
    &__delete-btn {
      background: #e0e0e0;
      box-shadow: 0 0 8px 0 #e0e0e0;
      border: none;
      padding: $padding $padding*2;
      border-radius: $radius;
    }
    &__quantity {
      display: flex;
      padding: 0 10px;
      margin: 0 10px;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 500px) {
    .v-cart-item {
      box-sizing: border-box;
      border: none;
      flex-direction: column;
      &__quantity {
        margin: 0 10px 10px 10px;
      }
    }
  }
</style>