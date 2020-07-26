<template>
  <div class="header">
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
