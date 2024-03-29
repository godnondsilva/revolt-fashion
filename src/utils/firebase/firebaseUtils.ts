import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	NextOrObserver,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
	QueryDocumentSnapshot,
} from 'firebase/firestore';
import { ObjectToAdd, UserData, AdditionalInfo } from './firebaseTypes';
import { Category } from '../../store/categories/categoriesTypes';

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
	userAuth: User,
	additionalInfo = {} as AdditionalInfo,
): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
			console.log('Error creating the user!', error);
		}
	}

	return userSnapshot as QueryDocumentSnapshot<UserData>;
};

// Function used to call the createUserDocumentFromAuth function to create a new user in the firebase authentication
export const createAuthUserWithEmailAndPassword = async (
	email: string,
	password: string,
) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

// Function used to call the signInUserWithEmailAndPassword function to create a new user in the firebase authentication
export const signInAuthUserWithEmailAndPassword = async (
	email: string,
	password: string,
) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

// Function used to call the signOut function to sign out the user from the firebase authentication
export const signOutUser = async () => await signOut(auth);

// Function used to call the onAuthStateChanged function to listen to the user authentication state
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
	onAuthStateChanged(auth, callback);

// Function used to call the getCurrentUser function to get the current user using the onAuthStateChanged observer
export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject,
		);
	});
};

// Function to add initial products data to the firestore [TO BE RUN ONLY ONCE]
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
	collectionsKey: string,
	objectsToAdd: T[],
): Promise<void> => {
	const collectionRef = collection(db, collectionsKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('Successfully added data to the firestore!');
};

// Function to get the initial categories data to the firestore
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map(
		(querySnapshot) => querySnapshot.data() as Category,
	);
};
