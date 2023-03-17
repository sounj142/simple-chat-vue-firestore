import { projectFirestore, projectAuth, serverTimestamp } from './config';

export async function createChat(message) {
  const user = projectAuth.currentUser;
  const newChat = {
    message: message,
    uid: user.uid,
    displayName: user.displayName,
    createdAt: serverTimestamp(),
  };

  const dataResource = projectFirestore.collection('chats');
  const res = await dataResource.add(newChat);

  return res.id;
}
