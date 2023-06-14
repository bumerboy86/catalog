<script>
export default {
  name: "v-catalog-item"
}
</script>

<template>
  <div class="v-catalog-item">
    <img src="" alt="img">
    <p>Item 1</p>
    <p>Price 500</p>
    <button>Add to cart</button>
  </div>
</template>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
  }
</style>