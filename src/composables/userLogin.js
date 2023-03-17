import * as auth from '@/firebase/auth';

export default function userLogin(isLoading, error) {
  const logIn = async ({ email, password }) => {
    try {
      isLoading.value = true;
      error.value = null;
      await auth.logIn(email, password);
    } catch (err) {
      console.log(err);
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  return { logIn };
}
