import React from 'react';
import ScrollTop from 'react-scroll-to-top';

import Layout from './Layout';

const AboutUs = () => {
  return (
    <Layout
      title="About Us"
      description="Bristar online Liguor Store"
      className="container-fluid"
    >
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <p>
                Bristar is the Belgium leading online drinks store offering a
                comprehensive range of Spirits, Beers Gifts. We do not operate
                any stores. As a pure online operation, we strive to deliver a
                high level of service including a fast turnaround of orders,
                delivering anywhere in the Belgium.
              </p>
              <p>
                Whatever your requirements, whether you're restocking a bar,
                catering for an event or occasion, sending gifts, or for
                personal enjoyment, at brisker.be we work hard to deliver a
                great service and fast delivery as standard!
              </p>

              <p>
                Looking to buy drinks online? Want direct delivery to your door?
                Maybe an exquisite tipple you had on holiday is proving hard to
                find on the high street? Here at Bristar, we offer unbeatable
                convenience, service and value, ensuring you get the
                best-quality drinks without the hassle of heavy shopping bags or
                the risk of empty supermarket shelves.
              </p>
              <p>
                We stock a vast range of products, selection of fine whiskies
                and rare spirits. We have drinks to suit every occasion, every
                meal and every mood – all supplied at fantastic prices. So why
                not give us a try? Thousands already have. We can deliver same
                or next day, and order is too big or too small.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop smooth color="#dc3545" />
    </Layout>
  );
};

export default AboutUs;
