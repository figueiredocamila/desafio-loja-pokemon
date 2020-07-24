<template>
  <div :class="`product-card ${isCheckout ? 'product-card--checkout' : ''}`">
    <div class="product-card__image-wrap">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
    </div>
    <span class="product-card__title">{{pokemon || 'Charizard'}}</span>
    <span class="product-card__price">R$ {{price || '100,00'}}</span>
    <Button v-if="!isCheckout"
      :text="'incluir na mochila'"
      :onClick="() => adiciona(pokemon, price)"/>
  </div>
</template>

<script>
import Button from '@/components/atoms/button/Button.vue';

export default {
  name: 'ProductCard',

  props: ['pokemon', 'price', 'onClick', 'imgUrl', 'isCheckout'],

  components: {
    Button,
  },

  methods: {
    adiciona(pokemon, price) {
      console.log('adicionado');
      console.log('pokemon', pokemon);
      console.log('price', price);
    },
  },
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
