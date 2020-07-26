<template>
  <div class="defaultTemplate">
    <slot name="header">
      <Header />
    </slot>
    <slot name="main">
    </slot>
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>
<script>
import Header from '@/components/organisms/header/Header.vue';
import Footer from '@/components/organisms/footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
