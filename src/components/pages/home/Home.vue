<template>
  <div class="home">

    <default-template v-slot:main>
      <div class="container">
        <div class="container__shelf">
          <search-input v-model="searchText" />
          <Shelf :products="products" />
        </div>
        <Checkout v-if="checkoutOpen" />
      </div>
    </default-template>

  </div>
</template>

<script>
import DefaultTemplate from '@/components/templates/defaultTemplate/DefaultTemplate.vue';
import Shelf from '@/components/organisms/shelf/Shelf.vue';
import Checkout from '@/components/organisms/checkout/Checkout.vue';
import SearchInput from '@/components/atoms/searchInput/SearchInput.vue';

export default {
  name: 'Home',

  components: {
    DefaultTemplate,
    Shelf,
    Checkout,
    SearchInput,
  },

  data: () => ({
    searchText: '',
  }),

  computed: {
    checkoutOpen() {
      return this.$store.state.checkoutStatus;
    },

    // modalOpen() {
    //   console.log(this.$store.state.checkoutStatus);
    //   return this.$store.state.checkoutStatus;
    // },

    products() {
      const { productList } = this.$store.getters;
      if (this.searchText) {
        return productList.filter((item) => item.name.includes(this.searchText));
      }
      return productList;
    },
  },

  created() {
    this.isDesktop();
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
      } else {
        this.$store.commit('setCheckoutStatus', false);
      }
    },

  },

};
</script>
<style lang="scss">
  @import './style.scss';
</style>
