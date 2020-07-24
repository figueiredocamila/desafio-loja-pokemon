<template>
  <div class="home">
    <product-card :isCheckout="false"/>
  </div>
</template>

<script>
import productCard from '@/components/molecules/productCard/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    productCard,
  },
  methods: {
    clicado() {
      console.log('clicado');
    },
  },
};
</script>
