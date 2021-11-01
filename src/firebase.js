import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBURf6axbEKwd3KCiRQ3alH3Ku3fUtRY-s",
    authDomain: "drive-clone-yt-536c7.firebaseapp.com",
    projectId: "drive-clone-yt-536c7",
    storageBucket: "drive-clone-yt-536c7.appspot.com",
    messagingSenderId: "371559349658",
    appId: "1:371559349658:web:664bdb9cc5ea5ee011ce23"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, storage, auth, provider}

