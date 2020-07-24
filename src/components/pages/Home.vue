<template>
  <div class="home">
    <product-card />
  </div>
</template>

<script>
import ProductCard from '@/components/molecules/productCard/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  methods: {
    clicado() {
      console.log('clicado');
    },
  },
};
</script>
