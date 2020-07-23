<template>
  <button @click="onClick" class="button">
    <!-- <i><img src="@/assets/backpack.svg" /></i> -->
    <span>{{text || 'botão'}}</span>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'color', 'onClick'],
};
</script>
<style>
  @import './style.scss';
</style>
