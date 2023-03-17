import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/views/Welcome.vue';
import Chatroom from '@/views/Chatroom.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta: { requiresGuest: true },
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const currentUser = store.state.user.currentUser;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!currentUser) {
      next({ name: 'Welcome' });
      return;
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (currentUser) {
      next({ name: 'Chatroom' });
      return;
    }
  }
  next();
});

export default router;
