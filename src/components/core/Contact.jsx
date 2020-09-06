import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollTop from 'react-scroll-to-top';

import { contact } from '../../apis/apiUser';
import Layout from './Layout';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: 'Query',
    message: '',
    error: '',
    success: false,
  });

  const { name, email, subject, message, success, error } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    contact({ name, email, subject, message, error }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          subject: '',
          message: '',
          error: false,
          success: true,
        });
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? '' : 'none' }}
    >
      We have received your message and would like to thank you for writing to
      us. If your inquiry is urgent, please use the telephone number listed
      above to talk to us. Otherwise, we will reply by email as soon as
      possible.
    </div>
  );

  return (
    <Layout
      title="Contact Us"
      description="Signin to Bristar Online Shop"
      className="container col-md-8 offset-md-2"
    >
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper px-md-4">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Address:</span> Molenweideplein 1 Lanaken 3620,
                          Belgium
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Phone:</span>{' '}
                          <a href="tel://1234567920">+32 493410755</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Email:</span>{' '}
                          <a href="mailto:sales@bristar.be">sales@bristar.be</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Website</span> <Link to="/">bristar.be</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      {showError()}
                      {showSuccess()}
                      <h3 className="mb-4">Contact Us</h3>
                      <form
                        onSubmit={handleSubmit}
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label">Full Name</label>
                              <input
                                onChange={handleChange('name')}
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label">Email Address</label>
                              <input
                                onChange={handleChange('email')}
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label">Subject</label>
                              <input
                                onChange={handleChange('subject')}
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label">Message</label>
                              <textarea
                                onChange={handleChange('message')}
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/*
                   */}
                  <div className="col-md-5 order-md-first d-flex align-items-stretch">
                    <div id="map" className="map"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop mooth color="#dc3545" />
    </Layout>
  );
};

export default Contact;
