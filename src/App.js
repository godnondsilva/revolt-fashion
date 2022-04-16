import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from './utils/firebase/firebaseUtils';

import { setCurrentUser } from './store/user/userActions';

import Navigation from './routes/navigation/Navigation';

// Routes
import Home from './routes/home/Home';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			console.log(user);
			if (user) {
				// Store the user in the firestore
				createUserDocumentFromAuth(user);
			}
			// Set the current user
			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='checkout' element={<Checkout />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
