const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config();


const firebaseConfig = {
    apiKey: "AIzaSyCMtQU8KB-W6eU26xNHJ2NLwGkzHzh5RMI",
    authDomain: "code-snippet-generator-c92c7.firebaseapp.com",
    projectId: "code-snippet-generator-c92c7",
    storageBucket: "code-snippet-generator-c92c7.appspot.com",
    messagingSenderId: "624121435419",
    appId: "1:624121435419:web:b915b168d5cfcfd9d7efbe",
    measurementId: "G-6QPJW3VH8C"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

module.exports = { auth, db };
