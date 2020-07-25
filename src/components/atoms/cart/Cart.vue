<template>
  <button @click="$emit('onClick')" class="cart">
    <i><img :src="imageUrl" /></i>
    <div v-if="count" class="cart__count">
      <span>{{count}}</span>
  </div>
  </button>
</template>
<script>
export default {
  props: ['count', 'imageUrl'],
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
