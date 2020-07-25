<template>
<div class="checkout-resume">
  <span>Total:</span>
  <span>R$ {{value}}</span>
</div>
</template>
<script>
export default {
  props: ['value'],
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
