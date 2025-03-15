import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import ContactUs from "../component/ContactUs";

import { Helmet } from 'react-helmet';
import WithLayout from "../component/Layout";

function Contact() {
  const dynamicTitle = 'Contact us';
  const dynamicDescription = 'this is hirring page';

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
      </Helmet>

      <div class="about-hero-banner">
        <div class="about-hero-text">
          <h1>Know more about Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
            viverra leo.
          </p>
        </div>
      </div>

      <div class="contactus-area">
        <div class="container">
          <div class="single-contact-area pb-5">
            <div class="row">
              {/* <!--single contact--> */}
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="single-contact-info">
                  <div class="info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div class="info-content">
                    <h6>Mail address</h6>
                    <span><a href="mailto:contact@vertipridesolutions.com">contact@vertipridesolutions.com</a></span>
                  </div>
                </div>
              </div>
              {/* <!--single contact--> */}
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-top-sb-30">
                <div class="single-contact-info">
                  <div class="info-icon">
                    <FontAwesomeIcon icon={faMobile} />
                  </div>
                  <div class="info-content">
                    <h6>Our Phone</h6>
                    <span><a href="tel:+919579879470">+91-9579879470</a></span>
                  </div>
                </div>
              </div>
              {/* <!--single contact--> */}
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-top-sb-30">
                <div class="single-contact-info large-mb-d">
                  <div class="info-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div class="info-content">
                    <h6>Our Location</h6>
                    <span>
                      <a href="https://www.google.com/maps/search/Arambh+Residency+and+Complex,+Behind+Indian+Oil+Pump,+Old+Bypass,Industrial+Area,+Amravati+444606+/@20.8654082,77.7174943,14z/data=!3m1!4b1?entry=ttu">
                        Arambh Residency and Complex, Behind Indian Oil Pump, Old Bypass,Industrial Area, Amravati 444606
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="single-contact-area mt-5">
            <div class="row ">
              {/* <!--single contact--> */}
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="single-contact-info">
                  <div class="info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div class="info-content">
                    <h6>Head Office</h6>
                    <span>
                      <a href="https://www.google.com/maps/search/Arambh+Residency+and+Complex,+Behind+Indian+Oil+Pump,+Old+Bypass,Industrial+Area,+Amravati+444606+/@20.8654082,77.7174943,14z/data=!3m1!4b1?entry=ttu"> Amravti: Flat no. 102, Aarambh Residency,Sainik
                        Arambh Residency and Complex, Behind Indian Oil Pump, Old Bypass,Industrial Area, Amravati 444606
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!--single contact--> */}
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-top-sb-30">
                <div class="single-contact-info">
                  <div class="info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div class="info-content">
                    <h6>Other Offices</h6>
                    <span>
                      <a href="https://www.google.com/maps/search/India-+Office+No+3,+Shree+Durga+Heights,+Ganesh+Nagar,+Badlapur(W),+Thane,+Mumbai+Region+/@19.2138183,72.936755,11z/data=!3m1!4b1?entry=ttu">
                        India- Office No 3, Shree Durga Heights, Ganesh Nagar, Badlapur(W), Thane, Mumbai Region
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!--single contact--> */}
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-top-sb-30">
                <div class="single-contact-info large-mb-d">
                  <div class="info-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div class="info-content">
                    <h6>Other Countries</h6>
                    <span>
                      <a href="https://www.google.com/maps/search/India-+Office+No+3,+Shree+Durga+Heights,+Ganesh+Nagar,+Badlapur(W),+Thane,+Mumbai+Region+/@19.2138183,72.936755,11z/data=!3m1!4b1?entry=ttu">
                      Middle East- Level 29, Marina Plaza, Dubai, UAE 
                    </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--contact form area--> */}

        </div>
      </div>
      <ContactUs />
    </>
  );
}

export default WithLayout(Contact);
