import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTop from 'react-scroll-to-top';

import Layout from './Layout';

const DeliveryInofAndFaq = () => {
  return (
    <Layout
      title="Delivery Informaion & Faq's"
      description="Bristar Online Shop"
      className="container-fluid"
    >
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <p>
                <span className="font-weight-bold">
                  Got a question about delivery, products, stock or payment?
                </span>{' '}
                <br />
                If you can't find answer in this page, please give us a call.
              </p>
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

              <p>
                <span className="font-weight-bold">
                  Where is my order confirmation?
                </span>
                <br />
                We send your order confirmation to the email address given at
                the signup, and this should be with you within minutes of the
                order completion. If you can’t find your email, do double check
                your junk folder. And do add us to your safe senders list.
              </p>

              <p>
                <span className="font-weight-bold">
                  I placed my order, but when will I receive it?
                </span>
                <br />
                One of our staff will contact and let you know the delivery data
                and time. Feel free to get in touch and we will be happy to let
                you know.
              </p>

              <p>
                <span className="font-weight-bold">
                  Can you offer same-day delivery?
                </span>
                <br />
                Yes, If you orderd before 2pm.
              </p>
              <p>
                <span className="font-weight-bold">
                  How do I qualify for free delivery?
                </span>
                <br />
                If your order over €20.
              </p>

              <p>
                <span className="font-weight-bold">
                  Do you offer weekend deliveries?
                </span>
                <br />
                We offer weekend delivery.
              </p>
              <p>
                <span className="font-weight-bold">
                  Can I order by telephone?
                </span>
                <br />
                Absolutely! All our contact numbers can be found{' '}
                <Link to="/contact">here</Link>.
              </p>
              <p>
                <span className="font-weight-bold">
                  I am looking to place an order for lots of bottles – what’s
                  your best price?
                </span>
                <br />
                We endeavour to keep our prices as competitive as possible,
                however we are always happy to look into a discount. The order
                would need to be placed first so that we can assess it. Simply
                contact us with your order number and we can advise if this is
                possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop smooth color="#dc3545" />
    </Layout>
  );
};

export default DeliveryInofAndFaq;
