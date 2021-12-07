// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVvxL6TGIsxKZSjAofNpmNXkqezt-81_4",
  authDomain: "severinoapp-6aed5.firebaseapp.com",
  databaseURL: "https://severinoapp-6aed5-default-rtdb.firebaseio.com",
  projectId: "severinoapp-6aed5",
  storageBucket: "severinoapp-6aed5.appspot.com",
  messagingSenderId: "652517501497",
  appId: "1:652517501497:web:96eedb3622ccf359e93be8",
  measurementId: "G-9CRS5NDGJ5"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();