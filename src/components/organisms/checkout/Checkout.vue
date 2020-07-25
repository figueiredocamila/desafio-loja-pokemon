<template>
  <div class="checkout">
    <div class="checkout__title">
      <span>Mochila</span>
    </div>
    <div class="checkout__body" v-for="product in 8" :key="product.id">
      <product-card isCheckout="true" />
    </div>
    <div class="checkout__resume">
      <Resume :value="10000"/>
      <Button :text="`finalizar compra`" />
    </div>
  </div>
</template>
<script>
import Button from '@/components/atoms/button/Button.vue';
import ProductCard from '@/components/molecules/productCard/ProductCard.vue';
import Resume from '@/components/molecules/resume/Resume.vue';

export default {
  components: {
    Button,
    ProductCard,
    Resume,
  },

};
</script>
<style lang="scss">
  @import './style.scss';
</style>
