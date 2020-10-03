import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getImageBackground } from '../../utils/cartHelpers';

//Actions
import { addCartItem } from '../../redux/actions/cart';

const Card = ({ product, promotion = '', displayColumn = 4, addCartItem }) => {
  return (
    <div className={`col-md-${displayColumn} d-flex`}>
      <div className="product ftco-animate fadeInUp ftco-animated">
        <div
          className="img d-flex align-items-center justify-content-center"
          style={getImageBackground(product)}
        >
          <div className="desc">
            <p className="meta-prod d-flex">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
                onClick={() => addCartItem(product)}
              >
                <span className="flaticon-shopping-bag"></span>
              </Link>

              <Link
                to={`/product/${product._id}`}
                className="d-flex align-items-center justify-content-center"
              >
                <span className="flaticon-visibility"></span>
              </Link>
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
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(Card);
