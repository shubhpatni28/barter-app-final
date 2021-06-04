import firebase from 'firebase';
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyB1HSYAzxkgj7aP5Qp2HKYBOncrBb3D26w",
    authDomain: "book-santa-app-11314.firebaseapp.com",
    projectId: "book-santa-app-11314",
    storageBucket: "book-santa-app-11314.appspot.com",
    messagingSenderId: "649394392885",
    appId: "1:649394392885:web:5a0dc2ceb94d20fe00867c"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
