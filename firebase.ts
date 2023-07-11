// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBREKd84QvU_kM5-blNlh4vxQELl8dt_3Q",
    authDomain: "edule-89d4f.firebaseapp.com",
    databaseURL: "https://edule-89d4f-default-rtdb.firebaseio.com",
    projectId: "edule-89d4f",
    storageBucket: "edule-89d4f.appspot.com",
    messagingSenderId: "889749024581",
    appId: "1:889749024581:web:89b030b9a32094c47bd82c",
    measurementId: "G-K2JJMLEF3N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore()
// export const analytics = getAnalytics(app);