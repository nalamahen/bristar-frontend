// Libs
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//import DropIn from 'braintree-web-drop-in-react';

//Helper methods
import {
  createOrder,
  getBraintreeClientToken,
  //processPayment,
} from '../../apis/apiCore';

// Actions
import { emptyCart } from '../../redux/actions/cart';

//Components
import { isAuthenticated } from '../../auth';
import { Link } from 'react-router-dom';

const Checkout = ({ products, cartTotal, emptyCart }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: '',
    instance: {},
    address: '',
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
        setData({ ...data, error: data.error });
      } else {
        setData({ clientToken: data.clientToken });
      }
    });
  };

  useEffect(() => {
    getToken(userId, token);
  }, [userId, token]);

  const handleAddress = (event) => {
    setData({ ...data, address: event.target.value });
  };

  const getTotal = () => {
    return parseFloat(cartTotal).toFixed(2);
  };

  const showCheckout = () => {
    return isAuthenticated() ? (
      <div>{showDropIn()}</div>
    ) : (
      <Link to="/signin">
        <button className="btn btn-primary">Sign in to checkout</button>
      </Link>
    );
  };

  let deliveryAddress = data.address;

  const submitOrder = () => {
    setData({ loading: true });

    const createOrderData = {
      products: products,
      transaction_id: `#${Math.random}`,
      amount: getTotal(products),
      address: deliveryAddress,
    };

    createOrder(userId, token, createOrderData)
      .then((response) => {
        emptyCart();
        setData({
          loading: false,
          success: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setData({ loading: false });
      });
  };

  /* const buy = () => {
    setData({ loading: true });
    // send the nonce to your server
    // nonce = data.instance.requestPaymentMethod()
    let nonce;
    let getNonce = data.instance
      .requestPaymentMethod()
      .then((data) => {
        // console.log(data);
        nonce = data.nonce;
        // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
        // and also total to be charged
        // console.log(
        //     "send nonce and total to process: ",
        //     nonce,
        //     getTotal(products)
        // );
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal(products),
        };

        processPayment(userId, token, paymentData)
          .then((response) => {
            console.log(response);
            // empty cart
            // create order

            const createOrderData = {
              products: products,
              transaction_id: response.transaction.id,
              amount: response.transaction.amount,
              address: deliveryAddress,
            };

            createOrder(userId, token, createOrderData)
              .then((response) => {
                emptyCart(() => {
                  setRun(!run); // run useEffect in parent Cart
                  console.log('payment success and empty cart');
                  setData({
                    loading: false,
                    success: true,
                  });
                });
              })
              .catch((error) => {
                console.log(error);
                setData({ loading: false });
              });
          })
          .catch((error) => {
            console.log(error);
            setData({ loading: false });
          });
      })
      .catch((error) => {
        // console.log("dropin error: ", error);
        setData({ ...data, error: error.message });
      });
  };*/

  const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: '' })}>
      {data.clientToken !== null && products.length > 0 ? (
        <div>
          <div className="form-group mb-3">
            <label className="text-muted">Delivery address:</label>
            <textarea
              onChange={handleAddress}
              className="form-control"
              value={data.address}
              placeholder="Type your delivery address and contact number here..."
            />
          </div>

          {/*  
          
          
          <DropIn
            options={{
              authorization: data.clientToken,
              paypal: {
                flow: 'vault',
              },
            }}
            onInstance={(instance) => (data.instance = instance)}
          />
          */}
          <button onClick={submitOrder} className="btn btn-success btn-block">
            Submit Order
          </button>
        </div>
      ) : null}
    </div>
  );

  const showError = (error) => (
    <div
      className="alert alert-danger"
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = (success) => (
    <div
      className="alert alert-info"
      style={{ display: success ? '' : 'none' }}
    >
      Thank you! Your order was successful!
    </div>
  );

  const showLoading = (loading) =>
    loading && <h2 className="text-danger">Loading...</h2>;

  return (
    <div>
      <p className="d-flex" style={{ fontWeight: 'bold' }}>
        <span>Cart Total:</span>
        <span>&euro;{parseFloat(cartTotal).toFixed(2)}</span>
      </p>
      {showLoading(data.loading)}
      {showSuccess(data.success)}
      {showError(data.error)}
      {showCheckout()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(emptyCart()),
});

export default connect(null, mapDispatchToProps)(Checkout);
