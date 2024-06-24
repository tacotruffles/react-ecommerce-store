import { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as NavLogo } from '../../assets/crown.svg';

import './navigation.sytles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <NavLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>Shop</Link>
          <Link className='nav-link' to='/auth'>Sign In</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation