import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// eslint-disable-next-line
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIp6AowU_hUbgCtH7U1QZEioKuV02JKEM",
  authDomain: "react-hooks-blog-71a00.firebaseapp.com",
  projectId: "react-hooks-blog-71a00",
  storageBucket: "react-hooks-blog-71a00.appspot.com",
  messagingSenderId: "271080339655",
  appId: "1:271080339655:web:b3b27bbd08c8d109aba6e2"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()