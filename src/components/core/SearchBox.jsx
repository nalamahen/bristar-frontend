// Libs
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

//Helper methods
import { getCategories } from '../../apis/apiCore';

//Components

const SearchBox = () => {
  const [data, setData] = useState({
    categories: [],
    category: 'All',
    search: '',
    searched: false,
  });

  const { categories, category, search, searched } = data;

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

  const getSearchCriteria = () => {
    if (search) {
      setData({ ...data, searched: true });
    }
  };

  const redirectToSearch = () => {
    return <Redirect to={`/search/${search}/${category ? category : 'All'}`} />;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getSearchCriteria();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchForm = () => (
    <div className="header-search">
      <form onSubmit={handleSubmit}>
        <input
          className="input search-input"
          type="text"
          placeholder="Search..."
          onChange={handleChange('search')}
        />
        <select
          className="input search-categories"
          onChange={handleChange('category')}
        >
          <option value="All">All</option>
          {categories.map((c, i) => (
            <option key={i} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
        <button className="search-btn">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );

  return (
    <React.Fragment>
      {searchForm()}
      {data.searched && redirectToSearch()}
    </React.Fragment>
  );
};

export default SearchBox;
