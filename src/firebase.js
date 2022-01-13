import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-EgbzTnERE9UM2Vb6S79CXRK79O5EPwg",
  authDomain: "notdisplay-eb9b6.firebaseapp.com",
  projectId: "notdisplay-eb9b6",
  storageBucket: "notdisplay-eb9b6.appspot.com",
  messagingSenderId: "421792142951",
  appId: "1:421792142951:web:197b4d75a45444f554a6c2",
  measurementId: "G-3Y39KWSLR2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
