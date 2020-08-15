import React from 'react';

const Topbar = ({ history }) => {
  return (
    <div className="wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <p className="mb-0 phone pl-md-2">
              <a href="/" className="mr-2">
                <span className="fa fa-phone mr-1"></span> +372 8195 8388
              </a>
              <a href="/">
                <span className="fa fa-paper-plane mr-1"></span>
                sales@bristar.be
              </a>
            </p>
          </div>
          {/* Search  */}

          {/* End search  */}
          <div className="col-md-6 d-flex justify-content-md-end">
            <div className="social-media mr-4"></div>
            <div className="reg">
              <p className="mb-0"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
