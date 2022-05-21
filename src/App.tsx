import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';
import { checkUserSession } from './store/user/userActions';

import Spinner from './components/spinner/Spinner';

// Dynamic Routes
const Home = lazy(() => import('./routes/home/Home'));
const Authentication = lazy(
	() => import('./routes/authentication/Authentication'),
);
const Shop = lazy(() => import('./routes/shop/Shop'));
const Checkout = lazy(() => import('./routes/checkout/Checkout'));
const Navigation = lazy(() => import('./routes/navigation/Navigation'));

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return (
		<Suspense fallback={<Spinner />}>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop/*' element={<Shop />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path='auth' element={<Authentication />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
