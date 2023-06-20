// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDGMGevRa-ivyqGaeaJmWjOgJ41clIrwz0',
    authDomain: 'lofi-chill-eea97.firebaseapp.com',
    projectId: 'lofi-chill-eea97',
    storageBucket: 'lofi-chill-eea97.appspot.com',
    messagingSenderId: '449302465299',
    appId: '1:449302465299:web:27cafa6592d425a09068e6',
    measurementId: 'G-LCRS1ENFJ1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
