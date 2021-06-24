import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbG96Pv6XGUkYvIbmKQ8tiULF7WpxR0_g",
    authDomain: "primetv-clone.firebaseapp.com",
    projectId: "primetv-clone",
    storageBucket: "primetv-clone.appspot.com",
    messagingSenderId: "878449354282",
    appId: "1:878449354282:web:55499d0f91a84e7dbe8553",
    measurementId: "G-WWY1MY7VXV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;