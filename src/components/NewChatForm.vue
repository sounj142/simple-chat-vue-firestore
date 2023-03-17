<template>
  <form>
    <textarea
      placeholder="Type a message and hit Enter to send, Ctrl+Enter to add new line"
      v-model="message"
      @keydown.enter="submitHandler"
      :disabled="isLoading"
    ></textarea>

    <div class="error" v-show="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import useCreateChat from '@/composables/chat/createChat';

export default {
  setup() {
    const message = ref('');
    const isLoading = ref(false);
    const error = ref(null);

    const { createChat } = useCreateChat(isLoading, error);

    const submitHandler = async (e) => {
      if (!e.ctrlKey) {
        e.preventDefault();

        await createChat(message.value);
        if (!error.value) {
          message.value = '';
        }
      } else {
        message.value += '\n';
      }
    };

    return { message, isLoading, error, submitHandler };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}

.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>
