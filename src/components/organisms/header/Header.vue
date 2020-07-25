<template>
  <div class="header">
    <span class="header__title">PokeStore.</span>
    <icon-button
      :count="10"
      :imageUrl="require('@/assets/backpack.svg')"
      @onClick="isCheckoutOpen(true)"
    />
  </div>
</template>
<script>
import IconButton from '@/components/atoms/iconButton/IconButton.vue';

export default {
  name: 'Header',
  props: ['count'],
  components: {
    IconButton,
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
