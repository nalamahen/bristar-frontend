// Libs
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

//Helpers
import { isAuthenticated } from '../../auth';
import { getPurchaseHistory } from '../../apis/apiUser';

//Components
import Layout from '../core/Layout';

const Dashboard = () => {
  const [history, setHistory] = useState([]);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, [_id, token]);

  const userLinks = () => {
    return (
      <div className="card mb-5">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={`/profile/${_id}`}>
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? 'Admin' : 'Registered User'}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {history.map((history, i) => {
              return (
                <div key={i}>
                  <hr />
                  {history.products.map((product) => {
                    return (
                      <div key={product._id}>
                        <h6>Product name: {product.name}</h6>
                        <h6>Product price: &euro;{product.price}</h6>
                        <h6>
                          Purchased date: {moment(product.createdAt).fromNow()}
                        </h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Layout
      title="Dashboard"
      description={`G'day ${name}!`}
      className="container-fluid"
    >
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-m-3">{userLinks()}</div>
            <div className="col-9">
              {userInfo()}
              {purchaseHistory()}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
