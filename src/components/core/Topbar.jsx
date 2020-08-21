import React from 'react';

import SearchBox from '../core/SearchBox';

const Topbar = ({ history }) => {
  return (
    <div className="wrap">
      <div className="container">
        <div class="row">
          <div class="col-md-3 d-flex align-items-center">
            <p class="mb-0 phone pl-md-2">
              <a href="#" class="mr-2">
                <span class="fa fa-phone mr-1"></span> +00 1234 567
              </a>
              <a href="#">
                <span class="fa fa-paper-plane mr-1"></span> youremail@email.com
              </a>
            </p>
          </div>
          <div class="col-md-9 d-flex justify-content-end">
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
