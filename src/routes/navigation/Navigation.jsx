import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './Navigation.scss';

import { ReactComponent as RevoltLogo } from '../../assets/logo.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>    
                    {/* <div className='logo'>Revolt Fashion</div> */}
                    <RevoltLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        HOME
                    </Link>  
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;