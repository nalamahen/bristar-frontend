// Libs
import React, { useState, useEffect } from 'react';

//Helper methods
import { getProduct, listRelated } from '../../apis/apiCore';

//Components
import Card from './Card';
import Layout from './Layout';

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(false);

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
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
    >
      <h2 className="mb-4">Single Product</h2>
      <div className="row">
        <div className="col-8">
          {product && product.description && (
            <Card product={product} showProductViewButton={false} />
          )}
        </div>
        <div className="col-4">
          <h4>Related products</h4>
          {relatedProducts.map((product) => (
            <div key={product._id} className="mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
