import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0Ai1o0ozXSPYSZvw3vQ1tBvvzW-Bf0_s",
    authDomain: "netflix-a45ad.firebaseapp.com",
    projectId: "netflix-a45ad",
    storageBucket: "netflix-a45ad.appspot.com",
    messagingSenderId: "709301965205",
    appId: "1:709301965205:web:f1c98b794c40ee61d4669c",
    measurementId: "G-JCZ9RXHW7Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ auth };
  export default db;