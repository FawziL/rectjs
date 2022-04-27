import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJvbBkm5XxkGaJRDUvkOl0AW7gbvBHWEk",
  authDomain: "reactjs-16cb2.firebaseapp.com",
  projectId: "reactjs-16cb2",
  storageBucket: "reactjs-16cb2.appspot.com",
  messagingSenderId: "620151570406",
  appId: "1:620151570406:web:2d44e08816e5b8b3686027"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)