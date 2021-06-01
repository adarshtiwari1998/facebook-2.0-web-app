import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC78dAaDy1eG3x5Wo6mpz534VYxFnfCeOo",
    authDomain: "facebook-2-0-web-adarsh-e8cbd.firebaseapp.com",
    projectId: "facebook-2-0-web-adarsh-e8cbd",
    storageBucket: "facebook-2-0-web-adarsh-e8cbd.appspot.com",
    messagingSenderId: "155443332986",
    appId: "1:155443332986:web:388a869e6bdd10df43b8c3",
    measurementId: "G-K5TEF77XGC"
  };

// initialise the app for checking is working or not becoz we are using server side rendering
// if ?  or : not 
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  // initialize firebase firestore database
  const db = app.firestore();
  // initialize firebase storage
  const storage = firebase.storage();

  export { db, storage };

