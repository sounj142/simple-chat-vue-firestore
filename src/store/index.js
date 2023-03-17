import { createStore } from 'vuex';
import userStore from './user';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: userStore,
  },
});

export const Actions = {
  user: {
    signUp: 'user/signUp',
    logIn: 'user/signUp',
  },
};

export const Mutations = {
  user: {
    setCurrentUser: 'user/setCurrentUser',
  },
};
