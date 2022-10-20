// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClZjMYN-xxHN2dNKAcH70jb1Nd7G_n2os",
    authDomain: "dragon-news-11b04.firebaseapp.com",
    projectId: "dragon-news-11b04",
    storageBucket: "dragon-news-11b04.appspot.com",
    messagingSenderId: "725928855207",
    appId: "1:725928855207:web:ff8162d1776bad6bfebd82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;