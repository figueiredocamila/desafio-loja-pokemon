<template>
<div class="checkout-resume">
  <span>Total:</span>
  <span>{{value}}</span>
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
