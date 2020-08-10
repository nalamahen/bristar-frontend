import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { itemTotal } from '../../utils/cartHelpers';
import { signout, isAuthenticated } from '../../auth';

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#ff9900' };
  return { color: '#ffffff' };
};

const Menu = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={isActive(history, '/')}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/shop"
            className="nav-link"
            style={isActive(history, '/shop')}
          >
            Shop
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/cart"
            className="nav-link"
            style={isActive(history, '/cart')}
          >
            Cart{' '}
            <sub>
              <small className="cart-badge">{itemTotal()}</small>
            </sub>
          </Link>
        </li>

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
            <Link
              to="/user/dashboard"
              className="nav-link"
              style={isActive(history, '/user/dashboard')}
            >
              Dashboard
            </Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              to="/admin/dashboard"
              className="nav-link"
              style={isActive(history, '/admin/dashboard')}
            >
              Dashboard
            </Link>
          </li>
        )}

        {!isAuthenticated() && (
          <React.Fragment>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, '/signin')}
                to="/signin"
              >
                Signin
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, '/signup')}
                to="/signup"
              >
                Signup
              </Link>
            </li>
          </React.Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: 'pointer', color: '#ffffff' }}
              onClick={() =>
                signout(() => {
                  history.push('/');
                })
              }
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
