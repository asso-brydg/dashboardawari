import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDr5zRrbsjym-CgQS9OFfy2UHKzJ7GHDJY",
    authDomain: "awari-3fc51.firebaseapp.com",
    projectId: "awari-3fc51",
    storageBucket: "awari-3fc51.appspot.com",
    messagingSenderId: "617929026568",
    appId: "1:617929026568:web:dc01c93315fcc6739eb5bd",
    measurementId: "G-SL3BNHT4HD"
  };
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

 const auth = firebase.auth()

export { firebase, auth}