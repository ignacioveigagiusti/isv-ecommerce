// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh4KOfBb9mEJzZLWuSdPQsyopPxLimazs",
  authDomain: "isv-e-commerce.firebaseapp.com",
  projectId: "isv-e-commerce",
  storageBucket: "isv-e-commerce.appspot.com",
  messagingSenderId: "984153977649",
  appId: "1:984153977649:web:746490a7245796f0e4f610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
