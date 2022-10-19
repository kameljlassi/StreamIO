import { initializeApp } from 'firebase/app';
import { readable } from 'svelte/store';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC9_jGW0WVWd_cO81AtiBdOWzg4jtqJqjU",
  authDomain: "streampfe-app.firebaseapp.com",
  projectId: "streampfe-app",
  storageBucket: "streampfe-app.appspot.com",
  messagingSenderId: "1056731312877",
  appId: "1:1056731312877:web:dff2c0295788599e9552e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
export const user = readable(undefined, (set) => {
  auth.onAuthStateChanged((user) => {
    console.log(user)
    set(user)

    const el = document.querySelector('.u-loader')
    if (el) {
      setTimeout(() => {
        el.remove()
      }, 1000)
    }
  })
})

