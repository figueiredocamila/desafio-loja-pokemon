<template>
  <div class="home">
    <Checkout />
  </div>
</template>

<script>
import Checkout from '@/components/organisms/checkout/Checkout.vue';

export default {
  name: 'Home',

  data: () => ({
    searchText: '',
  }),

  components: {
    Checkout,
  },

  computed: {
  },
};
</script>
