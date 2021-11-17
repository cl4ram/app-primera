import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRv7ZJ1vthOBaqiRZJdD6KkZleSypFVgg",
    authDomain: "app-primera-d4c0f.firebaseapp.com",
    projectId: "app-primera-d4c0f",
    storageBucket: "app-primera-d4c0f.appspot.com",
    messagingSenderId: "734465186664",
    appId: "1:734465186664:web:6791bf08a8e022dca0d4dd"};
    
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };