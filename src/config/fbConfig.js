import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAyMUUTgkY6FOP-wSUZn9P6eRSiajt9lnA",
  authDomain: "urbanjungle-2f3d6.firebaseapp.com",
  databaseURL: "https://urbanjungle-2f3d6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "urbanjungle-2f3d6",
  storageBucket: "urbanjungle-2f3d6.appspot.com",
  messagingSenderId: "653185632787",
  appId: "1:653185632787:web:4ad1466515e8df1d060de6",
  measurementId: "G-4EGJ9ZLQJS"
};

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
  