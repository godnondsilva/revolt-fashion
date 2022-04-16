import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartContext } from '../../contexts/cartContext';

import { signOutUser } from '../../utils/firebase/firebaseUtils';

import './Navigation.styles';

import { ReactComponent as RevoltLogo } from '../../assets/logo.svg';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import {
	LogoContainer,
	NavigationContainer,
	NavLinksContainer,
	NavLink,
} from './Navigation.styles.jsx';

import { selectCurrentUser } from '../../store/user/userSelector';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const { isCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();
	};

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<RevoltLogo className='logo' />
				</LogoContainer>
				<NavLinksContainer>
					<NavLink to='/'>HOME</NavLink>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutHandler}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinksContainer>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
