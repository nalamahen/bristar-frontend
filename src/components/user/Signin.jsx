import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Layout from '../core/Layout';
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
              <form action="#" class="billing-form">
                <h3 class="mb-4 billing-heading">Signup</h3>
                <div class="row align-items-end">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="emailaddress">Email Address</label>
                      <input
                        type="email"
                        class="form-control"
                        onChange={handleChange('email')}
                        value={email}
                      />
                    </div>
                  </div>

                  <div class="w-100"></div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="emailaddress">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        onChange={handleChange('password')}
                        name="password"
                      />
                    </div>
                  </div>

                  <div class="w-100"></div>
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary py-3 px-4"
                  >
                    Submit
                  </button>
                  <div class="w-100"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
