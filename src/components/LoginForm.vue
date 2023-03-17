<template>
  <form @submit.prevent="submitHandler">
    <input type="email" required placeholder="Email" v-model="formData.email" />

    <input
      type="password"
      required
      placeholder="Password"
      v-model="formData.password"
    />

    <div class="error" v-show="error">{{ error }}</div>

    <button :disabled="isLoading">
      <i class="fa fa-spinner fa-spin" v-show="isLoading"></i>
      Log In
    </button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import userLogin from '@/composables/userLogin';

export default {
  setup() {
    const router = useRouter();

    const formData = ref({
      email: '',
      password: '',
    });
    const isLoading = ref(false);
    const error = ref(null);

    const { logIn } = userLogin(isLoading, error);

    const submitHandler = async () => {
      await logIn(formData.value);
      if (!error.value) {
        router.push({ name: 'Chatroom' });
      }
    };

    return { formData, isLoading, error, submitHandler };
  },
};
</script>
