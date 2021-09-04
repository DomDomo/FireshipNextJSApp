import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAg--M32t-5c2-TGKwRs-1Dvy9NcOMavNo",
  authDomain: "fireshipapp-84ccf.firebaseapp.com",
  projectId: "fireshipapp-84ccf",
  storageBucket: "fireshipapp-84ccf.appspot.com",
  messagingSenderId: "196579169196",
  appId: "1:196579169196:web:1f12cbab94a72a4922a009",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
