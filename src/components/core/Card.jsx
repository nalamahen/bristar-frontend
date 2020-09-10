import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import {
  addItem,
  getImageBackground,
  removeItem,
  updateItem,
} from '../../utils/cartHelpers';

const Card = ({
  product,
  showProductViewLink = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  promotion = '',
  displayColumn = 4,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(false));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  // const showStock = (quantity) => {
  //   return quantity > 0 ? (
  //     <span className="badge badge-primary badge-pill">In Stock </span>
  //   ) : (
  //     <span className="badge badge-primary badge-pill">Out of Stock </span>
  //   );
  // };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend"></div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };

  /*
  const getImageUrl = (product) => {;
    return { backgroundImage: `url(${API}/product/photo/${product._id})` };
  };
*/
  return (
    <div className={`col-md-${displayColumn} d-flex`}>
      {shouldRedirect(redirect)}
      <div className="product ftco-animate fadeInUp ftco-animated">
        <div
          className="img d-flex align-items-center justify-content-center"
          style={getImageBackground(product)}
        >
          <div className="desc">
            <p className="meta-prod d-flex">
              {showAddToCartButton && (
                <Link
                  to="#"
                  className="d-flex align-items-center justify-content-center"
                  onClick={addToCart}
                >
                  <span className="flaticon-shopping-bag"></span>
                </Link>
              )}
              {showProductViewLink && (
                <Link
                  to={`/product/${product._id}`}
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="flaticon-visibility"></span>
                </Link>
              )}
            </p>
          </div>
        </div>
        <div className="text text-center">
          <span className="sale">{promotion}</span>
          <span className="category">
            {product.category && product.category.name}
          </span>
          <h2>{product.name}</h2>
          <p className="mb-0">
            <span className="price">
              &euro;{parseFloat(product.price).toFixed(2)}
            </span>
          </p>
        </div>
        {showRemoveButton(showRemoveProductButton)}
        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
};

export default Card;
