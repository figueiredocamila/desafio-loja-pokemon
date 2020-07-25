<template>
  <div class="home">
    <default-template />
  </div>
</template>

<script>
import DefaultTemplate from '@/components/templates/defaultTemplate/DefaultTemplate.vue';

export default {
  name: 'Home',

  data: () => ({
    searchText: '',
  }),

  components: {
    DefaultTemplate,
  },

  computed: {
  },
};
</script>
