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
    adToCart() {
        this.$emit('adToCart', this.product_data);
    }
  }
}

</script>

<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="require('../../assets/images/' + product_data.image)" alt="img">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Цена: {{Math.round(parseFloat(product_data.price) * 10 / 10)}} тг.</p>
    <button class="v-catalog-item__add_to_cart_btn btn" @click="adToCart">Добавить</button>
  </div>
</template>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    padding: $padding*2;
    margin-bottom: $margin*2;
    box-shadow: 0 0 13px #6e6c6c;
    background: #f3f3f3;
    &__image {
      width: 100px;
    }
    &__add_to_cart_btn {
      background: #334354;
      color: #ffffff;
      box-shadow: 0 0 8px 0 #e0e0e0;
      border: none;
      padding: $padding $padding*2;
      border-radius: $radius;
    }
    &__add_to_cart_btn:hover {
      box-shadow: 2px 2px 2px #f88005;
    }
  }

  @media screen and (max-width: 670px) {
    .v-catalog-item {
      flex-basis: 35%;
    }
  }

  @media screen and (max-width: 430px) {
    .v-catalog-item {
      flex-basis: 75%;
    }
  }
</style>