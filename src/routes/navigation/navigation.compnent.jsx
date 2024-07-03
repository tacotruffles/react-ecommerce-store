import { Fragment, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as NavLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';

import './navigation.sytles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log('current user: ', currentUser);
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <NavLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>Shop</Link>
          <Link className='nav-link' to='/auth'>{(!currentUser) ? 'Sign In' : `Sign Out: ${currentUser.email}`}</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation