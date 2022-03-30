import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCE3fdbR6MUw5_3sFr6m3dJvx90PvqDMpM",
  authDomain: "revolt-fashion.firebaseapp.com",
  projectId: "revolt-fashion",
  storageBucket: "revolt-fashion.appspot.com",
  messagingSenderId: "920351442288",
  appId: "1:920351442288:web:250f867a5f14d613e57bb5",
  measurementId: "G-GD8Q5DF4ND"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    'prompt': 'select_account'
});

// Firebase exports
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef); 

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }
    catch (error) {
      console.log('Error creating the user!', error.message);
    }
  }
  
  return userDocRef;
}