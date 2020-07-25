<template>
  <button @click="$emit('onClick')" class="icon-button">
    <i><img :src="imageUrl" /></i>
    <div v-if="count" class="icon-button__count">
      <span>{{count}}</span>
  </div>
  </button>
</template>
<script>
export default {
  props: ['count', 'imageUrl'],
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
