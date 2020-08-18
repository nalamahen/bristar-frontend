// Libs
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Helper methods
import { getProducts } from '../../apis/apiCore';

//Components
import Card from './Card';
import Layout from './Layout';
//import Search from './Search';

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts('sold').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title="Home Page"
      description="Bristar Online Shop"
      className="container-fluid"
      home={true}
    >
      {/*
      
      <Search />
      */}

      <section className="ftco-intro">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex">
              <div className="intro d-lg-flex w-100 ftco-animate fadeInUp ftco-animated">
                <div className="icon">
                  <span className="flaticon-support"></span>
                </div>
                <div className="text">
                  <h2>Online Support 24/7</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="intro color-1 d-lg-flex w-100 ftco-animate fadeInUp ftco-animated">
                <div className="icon">
                  <span className="flaticon-cashback"></span>
                </div>
                <div className="text">
                  <h2>Money Back Guarantee</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="intro color-2 d-lg-flex w-100 ftco-animate fadeInUp ftco-animated">
                <div className="icon">
                  <span className="flaticon-free-delivery"></span>
                </div>
                <div className="text">
                  <h2>Free Delivery &amp; Return</h2>
                  <p>
                    Once your order has been placed, we will do our utmost to
                    deliver to your door as soon as possible. We currently only
                    deliver to Belguim mainland postcodes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: 'url(images/about.jpg)' }}
            ></div>
            <div className="col-md-6 wrap-about pl-md-5 ftco-animate py-5 fadeInUp ftco-animated">
              <div className="heading-section">
                <h2 className="mb-4">Desire Meets A New Taste</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country.
                </p>
                <p className="year">
                  <strong className="number" data-number="115">
                    15
                  </strong>
                  <span>Years of Experience In Business</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4">
              <div className="sort w-100 text-center ftco-animate fadeInUp ftco-animated">
                <Link to="/shop">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(/images/kind-1.jpg)' }}
                  ></div>
                </Link>
                <h3>Brandy</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="sort w-100 text-center ftco-animate fadeInUp ftco-animated">
                <Link to="/shop">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/kind-2.jpg)' }}
                  ></div>
                </Link>
                <h3>Gin</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="sort w-100 text-center ftco-animate fadeInUp ftco-animated">
                <Link to="/shop">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/kind-3.jpg)' }}
                  ></div>
                </Link>
                <h3>Rum</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="sort w-100 text-center ftco-animate fadeInUp ftco-animated">
                <Link to="/shop">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/kind-4.jpg)' }}
                  ></div>
                </Link>
                <h3>Tequila</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="sort w-100 text-center ftco-animate fadeInUp ftco-animated">
                <Link to="/shop">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/kind-5.jpg)' }}
                  ></div>
                </Link>
                <h3>Vodka</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="sort w-100 text-center ftco-animate fadeInUp ftco-animated">
                <Link to="/shop">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/kind-6.jpg)' }}
                  ></div>
                </Link>
                <h3>Whisky</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Our Delightful offerings</span>
              <h2>Tastefully Yours</h2>
            </div>
          </div>

          <div className="row">
            {productsByArrival.map((product) => (
              <Card
                product={product}
                promotion="New Arrival"
                displayColumn="3"
                key={product._id}
              />
            ))}
          </div>

          <div className="row">
            {productsBySell.map((product) => (
              <Card
                product={product}
                promotion="Best Seller"
                displayColumn="3"
                key={product._id}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
