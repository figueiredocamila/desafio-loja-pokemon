<template>
  <div class="footer" :style="`background-color: ${footerColor};`">
    <span>Made by <a target="_blank" href="https://github.com/figueiredocamila">figueiredocamila</a></span>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    footerColor() {
      if (process.env.VUE_APP_POKEMON_TYPE === '10') {
        return '#CE5043';
      }
      return '#1E80A8';
    },
  },
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
