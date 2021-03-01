import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsR8tfE7ZiEaiLacNNg_Wr2En8m8vvOBE",
  authDomain: "twitter-clone-35f81.firebaseapp.com",
  databaseURL: "https://twitter-clone-35f81-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-35f81",
  storageBucket: "twitter-clone-35f81.appspot.com",
  messagingSenderId: "732761668822",
  appId: "1:732761668822:web:fabf9c3d8c2f69d833dd77",
  measurementId: "G-TVZCEE2HKT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
