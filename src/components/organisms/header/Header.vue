<template>
  <div class="header" :style="`background-color: ${headerColor};`">
    <span class="header__title">PokeStore.</span>
    <icon-button
      :count="count"
      :imageUrl="require('@/assets/backpack.svg')"
      @onClick="() => isCheckoutOpen(true)"
    />
  </div>
</template>
<script>
import IconButton from '@/components/atoms/iconButton/IconButton.vue';

export default {
  name: 'Header',
  components: {
    IconButton,
  },

  computed: {
    count() {
      return this.$store.getters.checkoutList.length;
    },

    headerColor() {
      console.log(process.env.VUE_APP_POKEMON_TYPE);
      if (process.env.VUE_APP_POKEMON_TYPE === '10') {
        return '#CE5043';
      }
      return '#1E80A8';
    },
  },

  methods: {
    isCheckoutOpen(status) {
      this.$store.commit('setCheckoutStatus', status);
    },
  },

};
</script>
<style lang="scss">
  @import './style.scss';
</style>
