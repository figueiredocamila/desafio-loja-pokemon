<template>
  <div :class="`product-card ${isCheckout ? 'product-card--checkout' : ''}`">
    <div class="product-card__image-wrap">
      <img alt="imagem do pokemon"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(product.url)}.png` || '@/assets/image-not-available'"
      />
    </div>
    <div :class="`product-card${isCheckout ? '__info-wrap--checkout' : '__info-wrap'}`">
      <span class="product-card__title">{{product.name || 'Nome do produto'}}</span>
      <span class="product-card__price">
        {{formatCurrency(product.price) || 'Preço do produto'}}
      </span>
    </div>
    <div class="product-card__actions" v-if="isCheckout">
      <icon-button
      :text="'Excluir'"
      :imageUrl="require('@/assets/delete.svg')"
      @onClick="() => removeProductFromCheckout(product)"/>
    </div>
    <Button v-if="!isCheckout"
      :text="'incluir na mochila'"
      @onClick="() => addItemToCheckout(product)"/>
  </div>
</template>

<script>
import Button from '@/components/atoms/button/Button.vue';
import IconButton from '@/components/atoms/iconButton/IconButton.vue';
import formatMoney from '@/utils/formatMoney';

export default {
  name: 'ProductCard',

  props: ['product', 'isCheckout'],

  components: {
    Button,
    IconButton,
  },

  computed: {
    themeColor() {
      if (process.env.VUE_APP_POKEMON_TYPE === '10') {
        return '#078C74';
      }
      return '#24CA64';
    },
  },

  methods: {
    addItemToCheckout(item) {
      this.$store.dispatch('addItemToCheckout', item);
    },

    formatCurrency(val) {
      return formatMoney.format(val);
    },

    removeProductFromCheckout(item) {
      this.$store.dispatch('removeItemFromCheckout', item);
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
