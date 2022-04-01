import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyB2dnLlNghs8y6oIZh9MViNRToIby1O97M",
    authDomain: "it-shack-db.firebaseapp.com",
    projectId: "it-shack-db",
    storageBucket: "it-shack-db.appspot.com",
    messagingSenderId: "40005749331",
    appId: "1:40005749331:web:711adf1f6d0fcc14b854a6",
    measurementId: "G-MWFCYQVZVH"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export default firebase;