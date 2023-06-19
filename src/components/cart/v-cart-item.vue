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
    },
    incrementItem() {
      this.$emit('incrementItem')
    },
    decrementItem() {
      this.$emit('decrementItem')
    },
  }
}
</script>

<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require(`../../assets/images/${cart_item_data.image}`)" alt="img">
    <div class="v-cart-item__info">
      <p class="v-cart-item__text">Наименование: {{cart_item_data.name}}</p>
      <p class="v-cart-item__text">Цена: {{Math.round(parseFloat(cart_item_data.price) * 10 / 10)}} тг.</p>
      <p class="v-cart-item__text">Артикл: {{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <div class="v-cart-item__span-box">
        <span class="v-cart-item__span" @click="decrementItem">-</span>
        <p>{{cart_item_data.quantity}} шт.</p>
        <span class="v-cart-item__span" @click="incrementItem">+</span>
      </div>
    </div>
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
    box-shadow: 0 0 13px #6e6c6c;
    margin: 10px;
    background: #f3f3f3;
    &__image {
      max-width: 100px;
    }
    &__text {
      text-align: left;
    }
    &__delete-btn {
      background: #334354;
      color: #ffffff;
      box-shadow: 0 0 8px 0 #e0e0e0;
      border: none;
      padding: $padding $padding*2;
      border-radius: $radius;
      cursor: pointer;
    }
    &__delete-btn:hover {
      box-shadow: 2px 2px 2px #f88005;
    }
    &__quantity {
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      margin: 0 10px;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    &__span-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-around;
    }
    &__span {
      cursor: pointer;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 500px) {
    .v-cart-item {
      box-sizing: border-box;
      border: none;
      flex-direction: column;
      &__quantity {
        margin: 0 10px 10px 10px;
        width: 100%;
      }
      &__delete-btn {
        margin-bottom: 10px;
      }
    }
  }
</style>