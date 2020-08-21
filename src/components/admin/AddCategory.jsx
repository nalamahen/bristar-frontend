import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { createCategory } from '../../apis/apiAdmin';
import { isAuthenticated } from '../../auth';
import Layout from '../core/Layout';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError('');
        setSuccess(true);
      }
    });
  };

  const handleChange = (e) => {
    setError('');
    setName(e.target.value);
  };

  const newCategoryFom = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
      <button className="btn btn-outline-primary">Create Category</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <he className="text-success">{name} is created</he>;
    }
  };

  const showError = () => {
    console.log('error', error);
    if (error) {
      return <he className="text-danger">Category should be unique</he>;
    }
  };

  const goBack = () => {
    return (
      <div className="mt-5">
        <Link to="/admin/dashboard" className="text-warning">
          Back to Dashboard
        </Link>
      </div>
    );
  };

  return (
    <Layout
      title="Add a new category"
      description={`G'day ${user.name}, ready to add a new category?`}
    >
      <section class="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              {showSuccess()}
              {showError()}
              {newCategoryFom()}
              {goBack()}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AddCategory;
