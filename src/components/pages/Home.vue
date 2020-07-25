<template>
  <div class="home">
    <Cart />
  </div>
</template>

<script>
import Cart from '@/components/atoms/cart/Cart.vue';

export default {
  name: 'Home',

  data: () => ({
    searchText: '',
  }),

  components: {
    Cart,
  },

  computed: {
  },
};
</script>
