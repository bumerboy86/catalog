<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      selectedOption: 'all'
    };
  },
  mounted() {
    this.$emit('emitOptionValue', this.selectedOption);
  },
  methods: {
    emitOptionValue() {
      this.$emit('emitOptionValue', this.selectedOption);
    }
  }
};
</script>

<template>
  <div class="v-select">
    <select class="v-select__select" v-model="selectedOption" @input="emitOptionValue">
      <option value="all">все</option>
      <option value="Мужские">Мужские</option>
      <option value="Женские">Женские</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.v-select {
  margin-bottom: 20px;
  &__select {
    padding: $padding $padding*2;
    border-radius: 10px;
    min-width: 290px;
  }
  &__select:focus {
    offset: none;
    outline: none;
  }
}
</style>