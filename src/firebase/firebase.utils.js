// We pull in the firebase sdk into our app from which
// we use the database and authentication features
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// its ok to expose this.
const config = {
  apiKey: "AIzaSyBPjkOKdtZM5CD-Aok3o0zuy-etJaXQhUs",
  authDomain: "crwn-db-fb30a.firebaseapp.com",
  databaseURL: "https://crwn-db-fb30a.firebaseio.com",
  projectId: "crwn-db-fb30a",
  storageBucket: "",
  messagingSenderId: "1085830476228",
  appId: "1:1085830476228:web:57383e83d3a9fea2"
};

// Hey firebase, u can identify me with this config obj
// which is exposed publically.
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// configure the provider. We need to sign in with
// google as our auth technique.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

export const createUserProfileDocument = async (userAuth, extraData) => {
  if (!userAuth) return;
  // check inside firebase if that use already exist.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // snapshot lets us know if the actual document exist
  const snapShot = await userRef.get();
  // if it doesnt exist, plz create one
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      });
    } catch (err) {
      console.log("error in creating user", err);
    }
  }
  return userRef;
};