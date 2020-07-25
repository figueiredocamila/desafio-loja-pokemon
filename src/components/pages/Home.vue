<template>
  <div class="home">
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/organisms/footer/Footer.vue';

export default {
  name: 'Home',

  data: () => ({
    searchText: '',
  }),

  components: {
    Footer,
  },

  computed: {
  },
};
</script>
