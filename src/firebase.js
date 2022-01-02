import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyA5GbbZ4jzDj9D771NMf8ZuuYsYUIAFgto",
  authDomain: "superchat-176ce.firebaseapp.com",
  projectId: "superchat-176ce",
  storageBucket: "superchat-176ce.appspot.com",
  messagingSenderId: "696424911823",
  appId: "1:696424911823:web:17bdeb3275bcb59281b8ba",
  measurementId: "G-VXPY4QBW93"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db,auth};