import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

//firebase configs
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3I6P1K_MiDQO0Z78Eu6eibLZvBkS8wSY",
  authDomain: "todo-reactnative-47224.firebaseapp.com",
  projectId: "todo-reactnative-47224",
  storageBucket: "todo-reactnative-47224.appspot.com",
  messagingSenderId: "212282143155",
  appId: "1:212282143155:web:d0c31eb083109a292f1bc6",
  measurementId: "G-WJXLMKGZ5Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
    
    export {db};