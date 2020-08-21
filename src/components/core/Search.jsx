import React, { useEffect, useState } from 'react';

//Helper methods
import { getListOfProducts } from '../../apis/apiCore';

// Components
import Layout from './Layout';
import Card from './Card';

const Search = ({ match }) => {
  const [results, setResults] = useState([]);

  const searchData = (search, category) => {
    if (search) {
      getListOfProducts({ search, category }).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          setResults(response);
        }
      });
    }
  };

  useEffect(() => {
    searchData(match.params.search, match.params.category);
  }, [match.params]);

  return (
    <Layout
      title="Search Results"
      description="Bristar Online Shop"
      className="container-fluid"
    >
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row mb-4">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                  <h4 className="product-select alert">
                    {results.length > 0
                      ? `Results found ${results.length}`
                      : 'No results found'}
                  </h4>
                </div>
              </div>

              <div className="row">
                {results.map((product) => (
                  <Card product={product} key={product._id} displayColumn="3" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Search;
