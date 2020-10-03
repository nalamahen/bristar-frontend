// Libs
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart';

//Components
import Layout from './Layout';
import Checkout from './Checkout';
import CheckoutItem from './CheckoutItem';

const Cart = ({ cartItems, cartTotal }) => {
  useEffect(() => {
    console.log('redering useEffect in cart.....');
  }, []);

  const showItems = (cartItems) => {
    return (
      <div>
        <h2 className="mb-4">Your cart has {`${cartItems.length} items`}</h2>
        <hr />
        {cartItems.map((item) => (
          <CheckoutItem key={item._id} item={item} />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  return (
    <Layout
      title="Shopping Cart"
      description="Manage your cart items. Add remove checkout or continue shopping."
      className="container-fluid"
    >
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="checkout-container">
              <div className="col-lg-8">
                {cartItems.length > 0 ? showItems(cartItems) : noItemsMessage()}
              </div>

              <div className="col-lg-8">
                <h2 className="mb-4">Your cart summary</h2>
                <hr />
                <Checkout products={cartItems} cartTotal={cartTotal} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
