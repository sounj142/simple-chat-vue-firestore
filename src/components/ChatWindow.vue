<template>
  <div class="chat-window">
    <div v-if="chats" class="messages" ref="mesagesPanel">
      <div v-for="chat in chats" :key="chat.id" class="single">
        <span class="created-at">{{
          formatDistanceToNow(chat.createdAt.toDate())
        }}</span>
        <span class="name">{{ chat.displayName }}</span>
        <span class="message">{{ chat.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUpdated } from 'vue';
import realtimeSubscribeChatChanel from '@/composables/chat/realtimeSubscribeChatChanel';
import { formatDistanceToNow } from 'date-fns';

export default {
  setup() {
    const mesagesPanel = ref(null);
    const { chats } = realtimeSubscribeChatChanel();

    let lastChatsLength = undefined;
    onUpdated(() => {
      if (!mesagesPanel.value) return;
      if (lastChatsLength !== chats.value?.length) {
        lastChatsLength = chats.value?.length;
        mesagesPanel.value.scrollTop = mesagesPanel.value.scrollHeight;
      }
    });

    return { chats, mesagesPanel, formatDistanceToNow };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
