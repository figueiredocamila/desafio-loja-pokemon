<template>
  <div class="header" :style="`background-color: ${themeColor};`">
    <span class="header__title">{{`${themeText} PokeStore.`}}</span>
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

    themeColor() {
      if (process.env.VUE_APP_POKEMON_TYPE === '10') {
        return '#CE5043';
      }
      return '#1E80A8';
    },

    themeText() {
      if (process.env.VUE_APP_POKEMON_TYPE === '10') {
        return 'Red';
      }
      return 'Blue';
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
