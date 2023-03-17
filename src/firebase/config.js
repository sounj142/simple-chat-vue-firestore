// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7quK3oAkNe5fPgpwBp9t0g93rHickMJs',
  authDomain: 'vue-js-3-firebase.firebaseapp.com',
  projectId: 'vue-js-3-firebase',
  storageBucket: 'vue-js-3-firebase.appspot.com',
  messagingSenderId: '498263934543',
  appId: '1:498263934543:web:8abff836680a320b344c3a',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth, serverTimestamp };
