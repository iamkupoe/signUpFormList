import * as firebase from 'firebase';

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDD_xYMKJlWpRWRPRbDbcb63TWZaaO33o4",
    authDomain: "contactformlist.firebaseapp.com",
    projectId: "contactformlist",
    storageBucket: "contactformlist.appspot.com",
    messagingSenderId: "380554479159",
    appId: "1:380554479159:web:696e5b523fc0e3be7361b2"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;