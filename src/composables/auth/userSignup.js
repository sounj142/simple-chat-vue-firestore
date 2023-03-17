import { useStore } from 'vuex';
import * as auth from '@/firebase/auth';
import { Mutations } from '@/store';

export default function userSignup(isLoading, error) {
  const store = useStore();

  const signUp = async ({ email, password, displayName }) => {
    try {
      isLoading.value = true;
      error.value = null;
      const user = await auth.signUp(email, password, displayName);
      // because onAuthStateChanged() always returns displayName=null after creating account
      // we must call store mutation manually https://stackoverflow.com/questions/64184341/displayname-always-returns-null-after-creating-account
      store.commit(Mutations.user.setCurrentUser, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });
    } catch (err) {
      console.log(err);
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  return { signUp };
}
