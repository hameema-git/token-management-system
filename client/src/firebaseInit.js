// client/src/firebaseInit.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWCLhBDLPkZydb_RJ3qu7uOMoHCXhWtNE",
  authDomain: "token-management-system-v1.firebaseapp.com",
  projectId: "token-management-system-v1",
  storageBucket: "token-management-system-v1.firebasestorage.app",
  messagingSenderId: "975705895758",
  appId: "1:975705895758:web:ecab2dac38600b7dad641f",
};

const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);
