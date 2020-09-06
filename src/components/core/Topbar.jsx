import React from 'react';
import { Link } from 'react-router-dom';

import SearchBox from '../core/SearchBox';

const Topbar = ({ history }) => {
  return (
    <div className="wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <p className="mb-0 phone pl-md-2">
              <Link to="/" className="mr-2">
                <span className="fa fa-phone mr-1"></span> +32 493410755
              </Link>
              <a href="mailto:sales@bristar.be">
                <span className="fa fa-paper-plane mr-1"></span>sales@bristar.be
              </a>
              <Link to="/">
                <span className="fa mr-1"></span>
                Free deliery order over &euro;20
              </Link>
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div className="mr-4">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
