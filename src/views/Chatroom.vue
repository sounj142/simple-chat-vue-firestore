<template>
  <div class="container" v-if="$store.state.user.currentUser">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  setup() {
    return {};
  },
};
</script>
