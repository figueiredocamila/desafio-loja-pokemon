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
        <Resume :value="formatCurrency(totalCheckout)"/>
        <Button :text="`finalizar compra`" @onClick="() => buyItems()" />
      </div>
    </div>

    <finished-modal :value="totalCheckout" v-if="modalOpen" />

  </div>
</template>
<script>
import Button from '@/components/atoms/button/Button.vue';
import IconButton from '@/components/atoms/iconButton/IconButton.vue';
import ProductCard from '@/components/molecules/productCard/ProductCard.vue';
import Resume from '@/components/molecules/resume/Resume.vue';

import FinishedModal from '@/components/molecules/finishedModal/FinishedModal.vue';
import { clearLocalCheckout } from '@/utils/localCheckout';
import formatMoney from '@/utils/formatMoney';

export default {
  components: {
    Button,
    IconButton,
    ProductCard,
    Resume,
    FinishedModal,
  },

  data: () => ({
    modal: false,
  }),

  computed: {
    checkoutList() {
      return this.$store.getters.checkoutList;
    },

    modalOpen() {
      return this.$store.state.modal;
    },

    totalCheckout() {
      if (this.checkoutList.length > 0) {
        const productPrices = this.checkoutList.map((list) => list.price);
        const total = productPrices.reduce((acc, value) => acc + value);
        return total;
      }
      return 0;
    },

  },

  methods: {
    isCheckoutOpen(status) {
      this.$store.commit('setCheckoutStatus', status);
    },

    buyItems() {
      if (this.checkoutList.length > 0) {
        this.$store.commit('setModalStatus', true);
        clearLocalCheckout();
      } else {
        alert('Selecione um item.');
      }
    },

    formatCurrency(val) {
      return formatMoney.format(val);
    },

  },
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
