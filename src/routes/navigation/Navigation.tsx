import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Navigation.styles';

import { ReactComponent as RevoltLogo } from '../../assets/logo.svg';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import {
	LogoContainer,
	NavigationContainer,
	NavLinksContainer,
	NavLink,
} from './Navigation.styles';

import { selectCurrentUser } from '../../store/user/userSelector';
import { selectIsCartOpen } from '../../store/cart/cartSelector';
import { signOutStart } from '../../store/user/userActions';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const dispatch = useDispatch();

	// DIspatch the signOutStart saga to begin the signing out phase
	const signOutHandler = async () => dispatch(signOutStart());

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
