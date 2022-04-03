import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCE3fdbR6MUw5_3sFr6m3dJvx90PvqDMpM',
	authDomain: 'revolt-fashion.firebaseapp.com',
	projectId: 'revolt-fashion',
	storageBucket: 'revolt-fashion.appspot.com',
	messagingSenderId: '920351442288',
	appId: '1:920351442288:web:250f867a5f14d613e57bb5',
	measurementId: 'G-GD8Q5DF4ND',
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

// Firebase exports
export const analytics = getAnalytics(app);
// Exports the auth object from firebase
export const auth = getAuth(app);
// Exports the firestore database
export const db = getFirestore();

// Function used to call the google popup sign in feature
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

// Function used to create a new document of the user information in the firestore
export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInfo = {},
) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.log('Error creating the user!', error.message);
		}
	}

	return userDocRef;
};

// Function used to call the createUserDocumentFromAuth function to create a new user in the firebase authentication
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

// Function used to call the signInUserWithEmailAndPassword function to create a new user in the firebase authentication
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

// Function used to call the signOut function to sign out the user from the firebase authentication
export const signOutUser = async () => await signOut(auth);

// Function used to call the onAuthStateChanged function to listen to the user authentication state
export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
