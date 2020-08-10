// Lib
import React, { useState, useEffect } from 'react';

// Helpers
import { getFilteredProducts, getCategories } from '../../apis/apiCore';
import { prices } from '../../utils/fixedPrices';

//Components
import Card from './Card';
import Checkbox from './Checkbox';
import Layout from './Layout';
import RadioButton from './RadioButton';

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState([]);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((response) => {
      if (response.error) {
        setError(response.error);
      } else {
        setFilteredResults(response.data);
        setSize(response.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    getFilteredProducts(skip, limit, myFilters.filters).then((response) => {
      if (response.error) {
        setError(response.error);
      } else {
        setFilteredResults([...filteredResults, ...response.data]);
        setSize(response.size);
        setSkip(0);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          Load more
        </button>
      )
    );
  };

  useEffect(() => {
    init();
    loadFilteredResults(myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy == 'price') {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    <Layout
      title="Bristar Shop Page"
      description="Search and find the products of your choice"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
          <h2>Filter by categories</h2>
          <ul>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => {
                handleFilters(filters, 'category');
              }}
            />
          </ul>

          <h2>Filter by price</h2>
          <div>
            <RadioButton
              prices={prices}
              handleFilters={(filters) => {
                handleFilters(filters, 'price');
              }}
            />
          </div>
        </div>
        <div className="col-8">
          <h2 className="mb-4">Products</h2>
          <div className="row">
            {filteredResults.map((product) => (
              <div key={product._id} className="col-4 mb-3">
                <Card product={product} />
              </div>
            ))}
          </div>
          {loadMoreButton()}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
