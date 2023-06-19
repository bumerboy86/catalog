<script>
export default {
  data() {
    return {
      selectedOption: 'all'
    };
  }
};
</script>

<template>
  <div class="v-select">
    <select v-model="selectedOption">
      <option value="all">все</option>
      <option value="male">Мужские</option>
      <option value="female">Женские</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.v-select {
  margin-bottom: 20px;
}
</style>