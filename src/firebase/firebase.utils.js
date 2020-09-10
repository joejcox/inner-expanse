import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBouaav_ktFryr8xVBaU81znz66G-KAvQs",
  authDomain: "inner-expanse.firebaseapp.com",
  databaseURL: "https://inner-expanse.firebaseio.com",
  projectId: "inner-expanse",
  storageBucket: "inner-expanse.appspot.com",
  messagingSenderId: "730595815408",
  appId: "1:730595815408:web:cf765804055d2fc9d1b735",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = (e) => {
  e.preventDefault();
  auth.signInWithPopup(provider);
};

export default firebase;
