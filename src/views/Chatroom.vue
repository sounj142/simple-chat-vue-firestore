<template>
  <div class="container" v-if="$store.state.user.currentUser">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import NewChatForm from '@/components/NewChatForm.vue';

export default {
  components: { Navbar, ChatWindow, NewChatForm },
};
</script>
