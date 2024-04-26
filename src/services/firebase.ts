import firebase from 'firebase/app';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq78C1fTFJWl6K3BZjoqbhSGBVznO6KpE",
  authDomain: "letmeask-91798.firebaseapp.com",
  databaseURL: "https://letmeask-91798-default-rtdb.firebaseio.com",
  projectId: "letmeask-91798",
  storageBucket: "letmeask-91798.appspot.com",
  messagingSenderId: "882777808051",
  appId: "1:882777808051:web:e32e3cb7942a42fab1e4c6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);