<template>
  <div class="checkout">
    <div class="overlay"></div>
    <div class="checkout__content">
      <div class="checkout__title">
        <span>Mochila</span>
        <icon-button
        :imageUrl="require('@/assets/close.svg')"
        @onClick="() => isCheckoutOpen(false)" />
      </div>
      <div class="checkout__body">
        <div class="checkout__card" v-for="product in checkoutList" :key="product.id">
          <product-card :product="product" :isCheckout="true" />
        </div>
      </div>
      <div class="checkout__resume">
        <Resume :value="totalCheckout"/>
        <Button :text="`finalizar compra`" @onClick="limpar" />
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/atoms/button/Button.vue';
import IconButton from '@/components/atoms/iconButton/IconButton.vue';
import ProductCard from '@/components/molecules/productCard/ProductCard.vue';
import Resume from '@/components/molecules/resume/Resume.vue';
import { clearLocalCheckout } from '@/utils/localCheckout';

export default {
  components: {
    Button,
    IconButton,
    ProductCard,
    Resume,
  },

  computed: {
    checkoutList() {
      return this.$store.getters.checkoutList;
    },

    totalCheckout() {
      if (this.checkoutList.length > 0) {
        const productPrices = this.checkoutList.map((list) => list.price);
        const total = productPrices.reduce((acc, value) => acc + value);
        return total.toFixed(2);
      }
      return 0;
    },

  },

  methods: {
    isCheckoutOpen(status) {
      this.$store.commit('setCheckoutStatus', status);
    },

    limpar() {
      clearLocalCheckout();
    },

  },
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
