import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ScrollTop from 'react-scroll-to-top';

import Layout from '../core/Layout';
import Button from '../core/Button';
import { signin, authenticate, isAuthenticated } from '../../auth';

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alwrt alert-info">
        <h2>Loading.....</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      }

      return <Redirect to="/user/dashboard" />;
    }

    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout
      title="Signin"
      description="Signin to Bristar Online Shop"
      className="container col-md-8 offset-md-2"
    >
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              {showLoading()}
              {showError()}
              <form action="#" className="billing-form">
                <h3 className="mb-4 billing-heading">Signup</h3>
                <div className="row align-items-end">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        onChange={handleChange('email')}
                        value={email}
                      />
                    </div>
                  </div>

                  <div className="w-100"></div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={handleChange('password')}
                        name="password"
                      />
                    </div>
                  </div>

                  <div className="w-100"></div>
                  <Button
                    label="submt"
                    className="btn btn-primary py-3 px-4"
                    onClick={handleSubmit}
                  />
                  <div className="w-100"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop smooth color="#dc3545" />
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
