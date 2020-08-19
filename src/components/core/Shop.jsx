// Lib
import React, { useState, useEffect } from 'react';

// Helpers
import {
  getFilteredProducts,
  getCategories,
  getCategoryByName,
} from '../../apis/apiCore';
import { prices } from '../../utils/fixedPrices';

//Components
import Card from './Card';
import Checkbox from './Checkbox';
import Layout from './Layout';
import RadioButton from './RadioButton';

const Shop = (props) => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
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

    const getCategoryByName = (name) => {
      getCategoryByName(name).then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setCategory(data);
        }
      });
    };
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
      title="Shop"
      description="Search and find the products of your choice"
      className="container-fluid"
    >
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 cart-total">
              <div className="sidebar-box">
                <div>Category</div>
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
                <hr />
              </div>
              <div>Price Range</div>
              <div>
                <RadioButton
                  prices={prices}
                  handleFilters={(filters) => {
                    handleFilters(filters, 'price');
                  }}
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="row mb-4">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                  <h4 className="product-select">Products</h4>
                </div>
              </div>

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
    </Layout>
  );
};

export default Shop;
