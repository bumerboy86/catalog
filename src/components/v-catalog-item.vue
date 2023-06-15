<script>

export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    sendDataToParrent() {
      console.log(this.$emit("sendArticle", this.product_data.article));
    }
  }
}

</script>

<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="require('../assets/images/' + product_data.image)" alt="img">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price {{product_data.price}} тг.</p>
    <button class="v-catalog-item__add_to_cart_btn btn" @click="sendDataToParrent">Add to cart</button>
  </div>
</template>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      width: 100px;
    }
    &__add_to_cart_btn {
      background: #e0e0e0;
      box-shadow: 0 0 8px 0 #e0e0e0;
      border: none;
      padding: $padding $padding*2;
      border-radius: $radius;
    }
  }
</style>