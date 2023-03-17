<template>
  <nav>
    <div>
      <p>Hey, {{ currentUser.displayName }}</p>
      <p class="email">Currently logged in as {{ currentUser.email }}</p>
    </div>

    <button @click="logOut" type="button">Logout</button>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import * as auth from '@/firebase/auth';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const currentUser = computed(() => store.state.user.currentUser);

    const logOut = async () => {
      await auth.logOut();
      router.push({ name: 'Welcome' });
    };

    return {
      currentUser,
      logOut,
    };
  },
};
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
