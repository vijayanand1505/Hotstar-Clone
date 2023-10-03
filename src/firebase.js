import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAY5nE1MvR-H_d4OQfjoI_DySt_8LaOIWg",
  authDomain: "hotstar-clone-5633e.firebaseapp.com",
  projectId: "hotstar-clone-5633e",
  storageBucket: "hotstar-clone-5633e.appspot.com",
  messagingSenderId: "881970490236",
  appId: "1:881970490236:web:123ee42d68a696351652f9",
  measurementId: "G-DCEGNHVVQZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
