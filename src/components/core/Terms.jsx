import React from 'react';
import ScrollTop from 'react-scroll-to-top';

import Layout from './Layout';

const Terms = () => {
  return (
    <Layout
      title="Terms & Conditions"
      description="Bristar online Liguor Store"
      className="container-fluid"
    >
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <p>
                <b>
                  The following terms and conditions do not affect your
                  statutory rights as a consumer:
                </b>
              </p>
              <p>
                You must be aged 18 years or over and have completed the signin
                procedure before goods may be delivered. You are responsible for
                the safekeeping of your user name and password and all orders
                made under such. You must notify us immediately of any known
                unauthorised user or any other possible breach in security.
              </p>

              <p>
                You accept that orders placed can only be delivered to a Belgium
                address and that this site is designed direct sale to
                individuals and end consumers and not to trade customers or
                those intending to re-sell the product.
              </p>

              <p>
                Certain products or services may be available exclusively online
                through the website. These products or services may have limited
                quantities and are subject to return or exchange only according
                to our Return and Exchange Policy.
              </p>
              <p>
                We have made every effort to display as accurately as possible
                the colours and images of our products that appear at the store.
                We cannot guarantee that your computer monitor’s display of any
                colour will be accurate.
              </p>

              <p>
                We reserve the right to refuse any order you place with us. We
                may, in our sole discretion, limit or cancel quantities
                purchased per person, per household or per order. These
                restrictions may include orders placed by or under the same
                customer account, and/or orders that use the same billing and/or
                delivery address. In the event that we make a change to or
                cancel an order, we may attempt to notify you by contacting the
                email and/or delivery address/phone number provided at the time
                the order was made.
              </p>

              <p>
                You agree to provide current, complete and accurate purchase and
                account information for all purchases made at our store. You
                agree to promptly update your account and other information,
                including your email address and phone number so that we can
                complete your transactions and contact you as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop smooth color="#dc3545" />
    </Layout>
  );
};

export default Terms;
