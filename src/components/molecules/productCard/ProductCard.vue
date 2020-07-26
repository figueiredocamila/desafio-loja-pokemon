<template>
  <div :class="`product-card ${isCheckout ? 'product-card--checkout' : ''}`">
    <div class="product-card__image-wrap">
      <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(product.url)}.png`" />
    </div>
    <span class="product-card__title">{{product.name || 'Nome do produto'}}</span>
    <span class="product-card__price">R$ {{price || '100,00'}}</span>
    <Button v-if="!isCheckout"
      :text="'incluir na mochila'"
      @onClick="() => addItemToCheckout(product)"/>
  </div>
</template>

<script>
import Button from '@/components/atoms/button/Button.vue';

export default {
  name: 'ProductCard',

  props: ['product', 'price', 'onClick', 'imgUrl', 'isCheckout'],

  components: {
    Button,
  },

  methods: {
    addItemToCheckout(product) {
      this.$store.dispatch('addItemsToCheckout', product);
    },

    getIdFromUrl(url) {
      const arr = url.split('/');
      return arr[arr.length - 2];
    },
  },
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
