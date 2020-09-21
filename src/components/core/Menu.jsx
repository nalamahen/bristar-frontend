import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { itemTotal } from '../../utils/cartHelpers';
import { signout, isAuthenticated } from '../../auth';

import CartDropdown from './CartDropdown';

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#ff9900' };
  return { color: '#ffffff' };
};

const Menu = ({ history }) => {
  const [showCardDropdown, setShowCartDropdown] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake"
      id="ftco-navbar"
    >
      <div className="container">
        <Link to="/">
          <img src="/images/logo-small-transparent.png" alt="Bristar" />
        </Link>
        <span style={{ color: 'rgb(255, 153, 0)' }}>Liquor&nbsp;Store</span>
        <div className="order-lg-last btn-group">
          <div
            onClick={() => setShowCartDropdown(!showCardDropdown)}
            style={{ cursor: 'pointer' }}
            className="btn-cart dropdown-toggle dropdown-toggle-split"
          >
            <span className="flaticon-shopping-bag"></span>
            <div className="d-flex justify-content-center align-items-center">
              <small>{itemTotal()}</small>
            </div>
          </div>
        </div>
        {showCardDropdown && <CartDropdown showCart={setShowCartDropdown} />}

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="navbar-collapse collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
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
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                style={isActive(history, '/about')}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                style={isActive(history, '/contact')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Menu);
