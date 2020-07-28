<template>
  <button @click="$emit('onClick')" class="icon-button">
    <i><img :src="imageUrl" /></i>
    <span v-if="text">{{text}}</span>
    <div v-if="count" class="icon-button__count">
      <span>{{count}}</span>
    </div>
  </button>
</template>
<script>
export default {
  name: 'IconButton',
  props: ['count', 'imageUrl', 'text'],
};
</script>
<style lang="scss">
  @import './style.scss';
</style>
