// Libs
import React, { useState, useEffect } from 'react';

//Helper methods
import { isAuthenticated } from '../../auth';
import { getProducts, deleteProduct } from '../../apis/apiAdmin';

//Components
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout
      title="Manage Products"
      description="Perform CRUD on products"
      className="container-fluid"
    >
      <section class="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h2 className="text-center">Total {products.length} products</h2>
              <hr />
              <ul className="list-group">
                {products.map((p, i) => (
                  <li
                    key={i}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <strong>{p.name}</strong>
                    <Link to={`/admin/product/update/${p._id}`}>
                      <span className="badge badge-warning badge-pill">
                        Update
                      </span>
                    </Link>
                    <span
                      onClick={() => destroy(p._id)}
                      className="badge badge-danger badge-pill"
                    >
                      Delete
                    </span>
                  </li>
                ))}
              </ul>
              <br />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ManageProducts;
