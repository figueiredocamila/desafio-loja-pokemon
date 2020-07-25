<template>
  <div class="checkout">
    <div class="checkout__title">
      <span>Mochila</span>
      <IconButton :imageUrl="require('@/assets/close.svg')" :onClick="isCheckoutOpen(false)" />
    </div>
    <div class="checkout__body">
      <div class="checkout__body--card" v-for="product in 10" :key="product.id">
        <product-card :isCheckout="true" />
      </div>
    </div>
    <div class="checkout__resume">
      <Resume :value="value"/>
      <Button :text="`finalizar compra`" />
    </div>
  </div>
</template>
<script>
import Button from '@/components/atoms/button/Button.vue';
import IconButton from '@/components/atoms/iconButton/IconButton.vue';
import ProductCard from '@/components/molecules/productCard/ProductCard.vue';
import Resume from '@/components/molecules/resume/Resume.vue';

export default {
  props: ['value'],
  components: {
    Button,
    IconButton,
    ProductCard,
    Resume,
  },

  methods: {
    isCheckoutOpen(status) {
      this.$store.commit('setCheckoutStatus', status);
    },
  },
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
