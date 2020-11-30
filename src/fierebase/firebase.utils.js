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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, phoneNumber, photoURL, emailVerified } = userAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            photoURL,
            phoneNumber,
            emailVerified,
            ...additionalData
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
    }
    
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;