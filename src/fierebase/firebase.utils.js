import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAqIdlHeS0ByJwtcnn_sJDMvHaLB-ayrD8",
    authDomain: "velvers-online-shop-db.firebaseapp.com",
    databaseURL: "https://velvers-online-shop-db.firebaseio.com",
    projectId: "velvers-online-shop-db",
    storageBucket: "velvers-online-shop-db.appspot.com",
    messagingSenderId: "220028995915",
    appId: "1:220028995915:web:b8e4c2511a1d2a6c6840ce",
    measurementId: "G-KK51LMTKV0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;