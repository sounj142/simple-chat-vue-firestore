<template>
  <FullScreenLoading v-if="$store.state.user.currentUser === undefined" />
  <router-view v-else />
</template>

<script>
import routerAuthentication from '@/composables/auth/routerAuthentication';
import FullScreenLoading from './components/FullScreenLoading.vue';

export default {
  setup() {
    routerAuthentication();
    return {};
  },
  components: { FullScreenLoading },
};
</script>
