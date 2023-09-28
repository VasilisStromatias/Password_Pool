import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
      apiKey: "AIzaSyDsrO5hburRD7A048H3wITb9ZSSSvWfpxo",
      authDomain: "pass-pool.firebaseapp.com",
      projectId: "pass-pool",
      storageBucket: "pass-pool.appspot.com",
      messagingSenderId: "334058401718",
      appId: "1:334058401718:web:828874ad73d8d6d2579b17",
    };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }

  return db;
};
