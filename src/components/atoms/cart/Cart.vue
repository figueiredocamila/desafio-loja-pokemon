<template>
  <button @click="$emit('onClick')" class="cart">
    <i><img src="@/assets/backpack.svg" /></i>
    <div class="cart__count">
      <span>{{count}}</span>
    </div>
  </button>
</template>
<script>
export default {
  props: ['count'],
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
