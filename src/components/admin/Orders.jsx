import React, { useState, useEffect } from 'react';
import moment from 'moment';

import {
  listOrders,
  getStatusValues,
  updateOrderStatus,
} from '../../apis/apiAdmin';
import { isAuthenticated } from '../../auth';
import Layout from '../core/Layout';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [statusValues, setStatusValues] = useState([]);

  const { user, token } = isAuthenticated();

  const loadOrders = () => {
    listOrders(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  const loadStatusValues = () => {
    getStatusValues(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStatusValues(data);
      }
    });
  };

  useEffect(() => {
    loadOrders();
    loadStatusValues();
  }, []);

  const showOrderLength = () => {
    if (orders.length > 0) {
      return (
        <h1 className="text-danger display-2">Total orders: {orders.length}</h1>
      );
    }
    return <h1 className="text-danger">No orders</h1>;
  };

  const showInput = (key, value) => (
    <div className="input-group mb-2 mr-sm-2">
      <div className="input-group-prepend">
        <div className="input-group-text">{key}</div>
      </div>
      <input type="text" value={value} className="form-control" readOnly />
    </div>
  );

  const showStatus = (order) => (
    <div className="form-group">
      <h3 className="mark mb-4">Status: {order.status}</h3>
      <select
        className="form-control"
        onChange={(e) => handleStatusChange(e, order._id)}
      >
        <option>Update Status</option>
        {statusValues.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );

  const handleStatusChange = (e, orderId) => {
    updateOrderStatus(user._id, token, orderId, e.target.value).then((data) => {
      console.log('data', data);
      if (data.error) {
        console.log('Status update failed');
      } else {
        loadOrders();
      }
    });
  };

  return (
    <Layout
      title="View Orders"
      description={`G'day ${user.name}, you can manage all the orders`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showOrderLength()}
          {orders.map((order) => {
            return (
              <div
                className="mt-5"
                key={order._id}
                style={{ borderBottom: '5px solid indigo' }}
              >
                <h2 className="mb-5">
                  <span className="bg-primary">Order ID: {order._id}</span>
                </h2>
                <ul className="list-group mb-2">
                  <li className="list-group-item">{showStatus(order)}</li>
                  <li className="list-group-item">
                    Transaction ID: {order.transaction_id}
                  </li>
                  <li className="list-group-item">Amount: ${order.amount}</li>
                  <li className="list-group-item">
                    Ordered by: {order.user.name}
                  </li>
                  <li className="list-group-item">
                    Ordered on: {moment(order.createdAt).fromNow()}
                  </li>
                  <li className="list-group-item">
                    Delivery address: {order.address}
                  </li>
                </ul>

                <h3 className="mt-4 mb-4 font-italic">
                  Total products in the order: {order.products.length}
                </h3>

                {order.products.map((product) => (
                  <div
                    className="mb-4"
                    key={product._id}
                    style={{
                      padding: '20px',
                      border: '1px solid indigo',
                    }}
                  >
                    {showInput('Product name', product.name)}
                    {showInput('Product price', product.price)}
                    {showInput('Product total', product.count)}
                    {showInput('Product Id', product._id)}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
