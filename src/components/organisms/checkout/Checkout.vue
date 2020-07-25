<template>
  <div class="checkout">
    <div class="checkout__title">
      <span>Mochila</span>
    </div>
    <div class="checkout__body" v-for="product in 8" :key="product.id">
      <product-card isCheckout="true" />
    </div>
    <div class="checkout__resume">
      <div>
        <span>Total:</span>
        <span>R$ 1000</span>
      </div>
      <Button :text="`finalizar compra`" />
    </div>
  </div>
</template>
<script>
import Button from '@/components/atoms/button/Button.vue';
import ProductCard from '@/components/molecules/productCard/ProductCard.vue';

export default {
  components: {
    Button,
    ProductCard,
  },

};
</script>
<style lang="scss">
  @import './style.scss';
</style>
