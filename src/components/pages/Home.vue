<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/molecules/header/Header.vue';

export default {
  name: 'Home',

  data: () => ({
    searchText: '',
  }),

  components: {
    Header,
  },

  computed: {
  },
};
</script>
