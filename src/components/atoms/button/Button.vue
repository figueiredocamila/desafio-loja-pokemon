<template>
  <button @click="$emit('onClick')" class="button" :style="`background-color: ${themeColor}`">
    <span>{{text || 'botão'}}</span>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'imageUrl'],

  computed: {
    themeColor() {
      if (process.env.VUE_APP_POKEMON_TYPE === '10') {
        return '#078C74';
      }
      return '#24CA64';
    },
  },
};
</script>
<style>
  @import './style.scss';
</style>
