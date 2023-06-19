<script>
export default {
  name: "v-cart-icon",

  props: {
    productsNumber: {
      type: Number,
      default () {
        return 0;
      }
    }
  },

}
</script>

<template>
  <div class="v-cart-icon">
    <p class="v-cart-icon__text">{{productsNumber > 19 ? (Math.floor(productsNumber / 10) * 10)+ '+' : productsNumber}}</p>
  </div>
</template>

<style scoped lang="scss">
.v-cart-icon {
  border-radius: 9px;
  background: url('../../assets/shopping-cart.png') center/ cover no-repeat;
  background-size: 80%;
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: green;
  text-align: center;
  z-index: 2;
  &:hover {
    box-shadow: 2px 2px 10px white;
  }
  &__text {
    display: flex;
    position: absolute;
    background: #e0e0e0;
    border-radius: 50%;
    width: 30px;
    font-size: 10px;
    height: 30px;
    text-align: center;
    right: -12px;
    top: -23px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }
}
</style>