<template>
  <div class="finished-modal">
    <div class="overlay-modal"></div>
    <div class="finished-modal__info">
      <icon-button
      class="finished-modal__actions"
      :imageUrl="require('@/assets/close.svg')"
      @onClick="closeModal"/>
      <div class="finished-modal__message">
        <span>Obrigado!!!</span>
        <span>Você ganhou de volta</span>
      </div>
      <span class="finished-modal__cashback">R$ {{cashback}}</span>
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
  },

  methods: {
    closeModal() {
      this.$store.commit('setModalStatus', false);
      this.$store.commit('removeItemFromCheckoutList', []);
    },
  },
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
