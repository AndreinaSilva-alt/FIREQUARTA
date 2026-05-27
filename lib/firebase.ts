
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCYfC0pC0rcmtBqh6lvRU3uPQvkl968YME",
  authDomain: "aulaquarafb.firebaseapp.com",
  databaseURL: "https://aulaquarafb.firebaseio.com",
  projectId: "aulaquarafb",
  storageBucket: "aulaquarafb.firebasestorage.app",
  messagingSenderId: "312448902362",
  appId: "1:312448902362:web:385d9256b5ca27b23ab1e3",
  measurementId: "G-HCE5D1CD8C"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
