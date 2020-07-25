<template>
  <div class="header">
    <span class="header__title">PokeStore.</span>
    <Cart :count="count" />
  </div>
</template>
<script>
import Cart from '@/components/atoms/cart/Cart.vue';

export default {
  name: 'Header',
  props: ['count'],
  components: {
    Cart,
  },

};
</script>
<style lang="scss">
  @import './style.scss';
</style>
