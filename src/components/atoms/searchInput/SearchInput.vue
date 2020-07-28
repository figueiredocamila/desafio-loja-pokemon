<template>
  <input
    class="search-input"
    type="text"
    placeholder="Procure seu Pokemón"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  name: 'SearchInput',
  props: ['value'],
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
