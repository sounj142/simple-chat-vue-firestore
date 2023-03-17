import { projectFirestore } from '@/firebase/config';
import { ref, onUnmounted } from 'vue';

export default function realtimeSubscribeChatChanel() {
  const chats = ref(null);

  const dataResource = projectFirestore
    .collection('chats')
    .orderBy('createdAt', 'asc');

  const unsubscribe = dataResource.onSnapshot(
    (res) => {
      chats.value = res.docs
        .map((p) => {
          const item = p.data();
          item.id = p.id;
          return item;
        })
        .filter((x) => x.createdAt);
      // console.log(chats.value);
    },
    (err) => {
      console.log(err);
    }
  );

  onUnmounted(unsubscribe);

  return { chats };
}
