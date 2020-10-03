// Libs
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Helper methods
import { getProduct, listRelated } from '../../apis/apiCore';
import { showError } from '../../utils/helperMetohds';
import { getImageUrl } from '../../utils/cartHelpers';

//Actions
import { addCartItem } from '../../redux/actions/cart';

//Components
import Card from './Card';
import Layout from './Layout';

const Product = ({ match, addCartItem }) => {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(false);

  const history = useHistory();

  const loadSingleProduct = (productId) => {
    getProduct(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        //fetch related product
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProducts(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = match.params.productId;
    loadSingleProduct(productId);
    showError(error);
  }, [match, error]);

  const addToCart = () => {
    addCartItem(product);
    history.push('/cart');
  };

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
    >
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <img
                src={getImageUrl(product)}
                className="img-fluid"
                alt="Colorlib Template"
              />
            </div>
            <div className="col-lg-6 product-details pl-md-5">
              <h3>{product.name}</h3>
              {/* 
              
              <div className="rating d-flex">
                <p className="text-left">
                  <a href="#" className="mr-2">
                    {product.sold} <span>Sold</span>
                  </a>
                </p>
              </div>
              */}
              <p className="price">
                <span>&euro;{parseFloat(product.price).toFixed(2)}</span>
              </p>
              <p>{product.description}</p>

              <div className="row mt-4">
                <div className="w-100"></div>
                <div className="col-md-12">
                  <p>{product.quantity} piece available</p>
                </div>
              </div>
              <p>
                <button
                  className="btn btn-primary mt-2 mb-2 mr-2"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>

                <button
                  onClick={addToCart}
                  className="btn btn-primary mt-2 mb-2 mr-2"
                >
                  Buy now
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <h2>Related products</h2>
            </div>
          </div>

          <div className="row">
            {relatedProducts.map((product) => (
              <Card product={product} displayColumn="3" key={product._id} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);
