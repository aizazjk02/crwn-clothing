import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Config for the firebase app 
const config = {
  apiKey: "AIzaSyBRw0PxNWmaX53Jgii9aSBBusbbNVotp9o",

  authDomain: "crwn-db-da70a.firebaseapp.com",

  projectId: "crwn-db-da70a",

  storageBucket: "crwn-db-da70a.appspot.com",

  messagingSenderId: "966026865216",

  appId: "1:966026865216:web:b91078ab2a779fe3478da5",

  measurementId: "G-J1K0L42R39",
};

// initialising the firebase with the config object from the portal 
firebase.initializeApp(config);

// exorting the auth and firestore lib 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up the signin with google 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 

