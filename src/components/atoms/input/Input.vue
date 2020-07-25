<template>
  <input
    class="input"
    type="text"
    placeholder="Procure seu Pokemón"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  props: ['value'],
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
