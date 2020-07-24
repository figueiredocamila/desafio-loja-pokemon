<template>
  <div class="home">
    <search-input  v-model="searchText"/>
    <span>{{searchText}}</span>
  </div>
</template>

<script>
import SearchInput from '@/components/atoms/input/Input.vue';

export default {
  name: 'Home',

  data: () => ({
    searchText: '',
  }),

  components: {
    SearchInput,
  },

  computed: {
  },
};
</script>
