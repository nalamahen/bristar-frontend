// Libs
import React, { useState, useEffect } from 'react';

//Helper methods
import { getCategories, getListOfProducts } from '../../apis/apiCore';

//Components
import Layout from './Layout';
import Card from './Card';

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: '',
    search: '',
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const searchData = () => {
    if (search) {
      getListOfProducts({ search: search || undefined, category }).then(
        (response) => {
          if (response.error) {
            console.log(response.error);
          } else {
            setData({ ...data, results: response, searched: true });
          }
        }
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return `Found ${results.length} product(s)`;
    }

    if (searched && results.length < 1) {
      return `No products found`;
    }
  };

  const searchdProducts = (results = []) => {
    return (
      <div>
        <h2 className="mt-4 mb4">{searchMessage(searched, results)}</h2>
        <div className="row">
          {results.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <span className="input-group-text">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <select onChange={handleChange('category')} className="btn mr2">
              <option value="All">All</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="search"
            className="form-control"
            onChange={handleChange('search')}
            placeholder="Search by name"
          />
        </div>
        <div className="btn input-group-append" style={{ border: 'none' }}>
          <button className="input-group-text">Search</button>
        </div>
      </span>
    </form>
  );

  return (
    <div className="row">
      <div className="container mb-3">{searchForm()}</div>
      <div className="container-fluid mb-3">{searchdProducts(results)}</div>
    </div>
  );
};

export default Search;
