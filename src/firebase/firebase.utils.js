import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwaYR7tXvTML03fbJOHj5widZh9iLFxIo",
  authDomain: "crown-clothing-31b93.firebaseapp.com",
  projectId: "crown-clothing-31b93",
  storageBucket: "crown-clothing-31b93.appspot.com",
  messagingSenderId: "763497342997",
  appId: "1:763497342997:web:19a71b0237d36a01c1861c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
