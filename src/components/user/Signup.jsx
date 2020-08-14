import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../core/Layout';
import { signup } from '../../auth';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const { name, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, success, error }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true,
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

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? '' : 'none' }}
    >
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );

  return (
    <Layout
      title="Signup"
      description="Signup to Bristar Online Shop"
      className="container col-md-8 offset-md-2"
    >
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              {showSuccess()}
              {showError()}
              <form action="#" class="billing-form">
                <h3 class="mb-4 billing-heading">Signup</h3>
                <div class="row align-items-end">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="firstname">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={handleChange('name')}
                        value={name}
                      />
                    </div>
                  </div>

                  <div class="w-100"></div>
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
    </Layout>
  );
};

export default Signup;
