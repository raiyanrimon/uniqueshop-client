// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFgt5EzWrjExoEYyf7ZXeTjDSTP0ZR2jc",
  authDomain: "unique-shop-85503.firebaseapp.com",
  projectId: "unique-shop-85503",
  storageBucket: "unique-shop-85503.appspot.com",
  messagingSenderId: "265960619346",
  appId: "1:265960619346:web:127792e3042afa478a8e8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app