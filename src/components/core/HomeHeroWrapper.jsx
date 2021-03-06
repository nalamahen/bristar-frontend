import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeroWrapper = () => {
  return (
    <div
      className="hero-wrap"
      style={{ background: "url('/images/bg_7.jpg') 50% 667.5px" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-8 ftco-animate d-flex align-items-end fadeInUp ftco-animated">
            <div className="text w-100 text-center">
              <h1 className="mb-4">
                <span>Good Drink for Good Moments</span>.
              </h1>
              <p>
                <Link to="/shop" className="btn btn-primary py-2 px-4">
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="btn btn-white btn-outline-white py-2 px-4"
                >
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroWrapper;
