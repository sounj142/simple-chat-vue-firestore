import { createChat as dbCreateChat } from '@/firebase/chat';

export default function useCreateChat(isLoading, error) {
  const createChat = async (message) => {
    try {
      isLoading.value = true;
      error.value = null;
      await dbCreateChat(message.trim());
    } catch (err) {
      console.log(err);
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  return { createChat };
}
