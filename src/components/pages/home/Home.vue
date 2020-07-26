<template>
  <div class="home">
    <default-template v-slot:main>
      <div class="container">
        <Input v-model="searchText" />
        <Shelf :products="products" />
        <Checkout v-if="checkoutOpened" />
      </div>
    </default-template>
  </div>
</template>

<script>
import DefaultTemplate from '@/components/templates/defaultTemplate/DefaultTemplate.vue';
import Shelf from '@/components/organisms/shelf/Shelf.vue';
import Checkout from '@/components/organisms/checkout/Checkout.vue';
import Input from '@/components/atoms/input/Input.vue';

export default {
  name: 'Home',

  components: {
    DefaultTemplate,
    Shelf,
    Checkout,
    Input,
  },

  data: () => ({
    searchText: '',
  }),

  computed: {
    checkoutOpened() {
      return this.$store.state.checkoutStatus;
    },

    products() {
      const { productList } = this.$store.getters;
      if (this.searchText) {
        return productList.filter((item) => item.name.includes(this.searchText));
      }
      return productList;
    },
  },

  created() {
    window.addEventListener('resize', this.isDesktop);
    this.$store.dispatch('getProductList');
  },

  destroyed() {
    window.removeEventListener('resize', this.isDesktop);
  },

  methods: {
    isDesktop() {
      if (window.outerWidth >= 1366) {
        this.$store.commit('setCheckoutStatus', true);
      }
    },

  },

};
</script>
<style lang="scss">
  @import './style.scss';
</style>
