<template>
<div class="shelf">
  <div class="shelf__card" v-for="product in products" :key="product.id">
    <product-card :product="product" />
  </div>
</div>
</template>
<script>
import ProductCard from '@/components/molecules/productCard/ProductCard.vue';

export default {
  name: 'Shelf',

  props: ['products'],

  components: {
    ProductCard,
  },

};
</script>
<style lang="scss">
  @import './style.scss';
</style>
