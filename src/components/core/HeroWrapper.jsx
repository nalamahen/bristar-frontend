import React from 'react';

const HeroWrapper = ({ title }) => {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{ background: "url('/images/bg_2.jpg')" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-end justify-content-center">
          <div className="col-md-9 mb-5 text-center">
            <h2 className="mb-0 bread">{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWrapper;
