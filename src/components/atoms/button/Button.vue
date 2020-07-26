<template>
  <button @click="$emit('onClick')" class="button">
    <span>{{text || 'botão'}}</span>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'imageUrl'],
};
</script>
<style>
  @import './style.scss';
</style>
