// Lib
import React, { useState, useEffect } from 'react';
import ScrollTop from 'react-scroll-to-top';

// Helpers
import { getFilteredProducts, getCategories } from '../../apis/apiCore';
import { prices } from '../../utils/fixedPrices';
import { showError } from '../../utils/helperMetohds';

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
  const [limit, setLimit] = useState(15);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = (name) => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
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
    console.log('toSkip');
    getFilteredProducts(toSkip, limit, myFilters.filters).then((response) => {
      if (response.error) {
        setError(response.error);
      } else {
        setFilteredResults([...filteredResults, ...response.data]);
        setSize(response.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <div className="row justify-content-center">
          <button onClick={loadMore} className="btn btn-warning mb-5 d-block">
            Load more
          </button>
        </div>
      )
    );
  };

  useEffect(() => {
    init();
    loadFilteredResults(myFilters.filters);
    showError(error);
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
      title="Shop"
      description="Search and find the products of your choice"
      className="container-fluid"
    >
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="sidebar-box">
                <div className="filter-heading">Category</div>
                <div>
                  <ul>
                    <Checkbox
                      categories={categories}
                      handleFilters={(filters) => {
                        handleFilters(filters, 'category');
                      }}
                    />
                  </ul>
                </div>
              </div>
              <div className="filter-heading">Price Range</div>
              <div>
                <RadioButton
                  prices={prices}
                  handleFilters={(filters) => {
                    handleFilters(filters, 'price');
                  }}
                />
              </div>
              <div className="filter-heading"></div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {filteredResults.map((product) => (
                  <Card product={product} key={product._id} />
                ))}
              </div>
              {loadMoreButton()}
            </div>
          </div>
        </div>
      </section>
      <ScrollTop smooth color="#dc3545" />
    </Layout>
  );
};

export default Shop;
