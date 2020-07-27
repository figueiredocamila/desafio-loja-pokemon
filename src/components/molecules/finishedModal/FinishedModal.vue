<template>
  <div class="finished-modal">
    <div class="overlay-modal"></div>
    <div class="finished-modal__info" :style="`border: 2px solid ${themeColor}`">
      <icon-button
      class="finished-modal__actions"
      :imageUrl="require('@/assets/close.svg')"
      @onClick="closeModal"/>
      <div class="finished-modal__message" :style="`color: ${themeColor}`">
        <span>Obrigado!!!</span>
        <span>Você ganhou de volta</span>
      </div>
      <span class="finished-modal__cashback" :style="`color: ${themeColor}`">R$ {{cashback}}</span>
    </div>
  </div>
</template>
<script>
import IconButton from '@/components/atoms/iconButton/IconButton.vue';

export default {
  name: 'FinishedModal',

  props: ['value'],

  components: {
    IconButton,
  },

  computed: {
    cashback() {
      return (this.value / 10).toFixed(2);
    },

    themeColor() {
      if (process.env.VUE_APP_POKEMON_TYPE === '10') {
        return '##CE5043';
      }
      return '#1E80A8';
    },
  },

  methods: {
    closeModal() {
      if (window.outerWidth < 1366) {
        this.$store.commit('setCheckoutStatus', false);
      }
      this.$store.commit('setModalStatus', false);
      this.$store.commit('removeItemFromCheckoutList', []);
    },
  },
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
