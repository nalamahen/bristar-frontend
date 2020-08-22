import React from 'react';

import Layout from './Layout';

const DeliveryInofAndFaq = () => {
  return (
    <Layout
      title="Delivery Informaion & Faq's"
      description="Bristar Online Shop"
      className="container-fluid"
    >
      <section class="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <p>
                <span className="font-weight-bold">
                  Can you accept order out side Belgium?
                </span>{' '}
                <br />
                We only accept orders for delivery within the Belgium. All
                orders placed Monday to Saturday before 2pm will normally be
                delivered within 1-2 working days, however this may be extended
                due to the effects of Covid-19.
              </p>
              <p>
                <span className="font-weight-bold">Can I track my order?</span>
                <br />
                On dispatch, you will receive an email or call from us.
              </p>
              <p>
                <span className="font-weight-bold">
                  Any other delivery advice?
                </span>
                <br />
                When placing your order please include a contact number,
                preferably a mobile, which will allow us to send you delivery
                information and driver to contact you should thre be any
                problems finding your address.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DeliveryInofAndFaq;
