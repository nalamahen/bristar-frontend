import React from 'react';
import { Link } from 'react-router-dom';

import SearchBox from '../core/SearchBox';

const Topbar = ({ history }) => {
  return (
    <div className="wrap">
      <div className="container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <p class="mb-0 phone pl-md-2">
              <a href="#" class="mr-2">
                <span class="fa fa-phone mr-1"></span> +32 493410755
              </a>
              <a href="mailto:sales@bristar.be">
                <span class="fa fa-paper-plane mr-1"></span>sales@bristar.be
              </a>
              <Link to="/">
                <span class="fa mr-1"></span>
                Free deliery order over &euro;30
              </Link>
            </p>
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <div class="mr-4">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
