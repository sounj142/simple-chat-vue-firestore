<template>
  <div class="welcome container">
    <div v-if="isLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>
        No account yet? <span @click="isLogin = !isLogin">Sign up</span> instead
      </p>
    </div>

    <div v-else>
      <h2>Register</h2>
      <SignupForm />
      <p>
        Already registered?
        <span @click="isLogin = !isLogin">Sign in</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: { SignupForm, LoginForm },
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>
