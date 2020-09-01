// Libs
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Helper methods
import { getProducts } from '../../apis/apiCore';

//Components
import Card from './Card';
import Layout from './Layout';

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
                    If you would like to know more about our products, services
                    and prices , please contact us via email or phone.
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
                    We will offer our customers a full refund if they are not
                    satisfied with our products.
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
                  Bristar is the Belgium leading online drinks store offering a
                  comprehensive range of Spirits, Beers Gifts. We do not operate
                  any stores. As a pure online operation, we strive to deliver a
                  high level of service including a fast turnaround of orders,
                  delivering anywhere in the Belgium.
                </p>
                <p>
                  Whatever your requirements, whether you're restocking a bar,
                  catering for an event or occasion, sending gifts, or for
                  personal enjoyment, at brisker.be we work hard to deliver a
                  great service and fast delivery as standard!
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
          <div class="row justify-content-center">
            <div class="col-md-4">
              <Link to="/shop" class="btn btn-primary d-block">
                View More Products <span class="fa fa-long-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
