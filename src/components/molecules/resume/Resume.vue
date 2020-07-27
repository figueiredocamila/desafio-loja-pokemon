<template>
<div class="checkout-resume">
  <span>Total:</span>
  <span>R$ {{value}}</span>
</div>
</template>
<script>
export default {
  nome: 'Resume',
  props: ['value'],
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
