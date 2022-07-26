import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBagPVFpZ2nFfT5GhlnPPx8xMQlzzfos_E",
  authDomain: "the-you-tube-clone.firebaseapp.com",
  projectId: "the-you-tube-clone",
  storageBucket: "the-you-tube-clone.appspot.com",
  messagingSenderId: "63777533658",
  appId: "1:63777533658:web:65a0ca3f9f4b4d9099bfe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export default app;