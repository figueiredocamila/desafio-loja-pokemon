<template>
  <div class="home">
    <Button :text="'camila'" :onClick="clicado"/>
  </div>
</template>

<script>
import Button from '@/components/atoms/button/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
  },
  methods: {
    clicado() {
      console.log('clicado');
    },
  },
};
</script>
