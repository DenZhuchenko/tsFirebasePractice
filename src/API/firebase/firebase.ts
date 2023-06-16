// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSIpJLt4nAvmGWC0SfihmeGyNnCTy6Aac",
    authDomain: "bobts-f8fa4.firebaseapp.com",
    projectId: "bobts-f8fa4",
    storageBucket: "bobts-f8fa4.appspot.com",
    messagingSenderId: "43253250601",
    appId: "1:43253250601:web:37d423c95f05985fde3a38",
    measurementId: "G-LM3TXE21P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

 // createUserWithEmailAndPassword(auth, email, password)
 //    .then((userCredential) => {
 //        // Signed in
 //        const user = userCredential.user;
 //        // ...
 //    })
 //    .catch((error) => {
 //        const errorCode = error.code;
 //        const errorMessage = error.message;
 //        // ..
 //    });