import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZRcTmgibRDBmddhEwUs39A_S7eFT0UV4",
  authDomain: "tinder-clone-9d584.firebaseapp.com",
  databaseURL: "https://tinder-clone-9d584.firebaseio.com",
  projectId: "tinder-clone-9d584",
  storageBucket: "tinder-clone-9d584.appspot.com",
  messagingSenderId: "605279007134",
  appId: "1:605279007134:web:496dc96063de576c2c268f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;