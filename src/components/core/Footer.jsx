import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ftco-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo">
                <a href="/">
                  Bristar Liquor <span>Store</span>
                </a>
              </h2>
              <p>
                At Bristar.be, we workd hard to deliver a great service and fast
                delivery as standard!
              </p>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">My Accounts</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/user/dashboard">
                    <span className="fa fa-chevron-right mr-2"></span>My Account
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <span className="fa fa-chevron-right mr-2"></span>Register
                  </Link>
                </li>
                <li>
                  <Link to="/signin">
                    <span className="fa fa-chevron-right mr-2"></span>Log In
                  </Link>
                </li>
                <li>
                  <Link to="/user/dashboard">
                    <span className="fa fa-chevron-right mr-2"></span>My Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about">
                    <span className="fa fa-chevron-right mr-2"></span>About us
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Catalog
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Contact us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Term &amp;
                    Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Link</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/contact">
                    <span className="fa fa-chevron-right mr-2"></span>Help
                    Center
                  </Link>
                </li>
                <li>
                  <Link to="/delivery-faq">
                    <span className="fa fa-chevron-right mr-2"></span>Delivery
                    Information and Faq's
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map marker"></span>
                    <span className="text">
                      Molenweideplein 1, Lanaken 3620, Belgium
                    </span>
                  </li>
                  <li>
                    <a href="//#region ">
                      <span className="icon fa fa-phone"></span>
                      <span className="text">+32 493410755</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:sales@bristar.be">
                      <span className="icon fa fa-paper-plane pr-4"></span>
                      <span className="text">sales@bristar.be</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.5' }}>
                Copyright ©
                <script
                  type="text/javascript"
                  async=""
                  src="https://www.google-analytics.com/analytics.js"
                ></script>
                <script type="text/javascript">
                  document.write(new Date().getFullYear());
                </script>
                2020 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
