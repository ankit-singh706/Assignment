import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyABa1U7qN6Cz2cXrFEJs9CxUoPb7BCUtYM",
    authDomain: "disney-clome.firebaseapp.com",
    projectId: "disney-clome",
    storageBucket: "disney-clome.appspot.com",
    messagingSenderId: "265117526729",
    appId: "1:265117526729:web:22a939b812bb2ed6e7bb18",
    measurementId: "G-SKQMWT1T3P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();


export { auth,provider } ;
export default db;