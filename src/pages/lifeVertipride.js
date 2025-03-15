import React from "react";
import pattern from "../image/expertise/e-pattern.png";
import CalendlyWidget from "../component/calendlyWidget";
import Count from "../component/counting";
import { Helmet } from 'react-helmet';
import WithLayout from "../component/Layout";

function lifeVertipride() {
  const dynamicTitle = 'Life in vertipride';
  const dynamicDescription = 'this is vertipride life page';
  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
      </Helmet>
      <div class="about-hero-banner">
        <div class="about-hero-text">
          <h1>Life At Vertipride</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
            viverra leo.{" "}
          </p>
        </div>
      </div>
      <section>
        <div class="main-counter-area">
          <div class="container">
            <div class="row">
              {/* <!-- section heading text--> */}
              <div class="col-xl-12 d-flex align-items-center">
                <div class="section-heading-1 home-counter-text text-center">
                  <h4>Summary</h4>
                  <h3>Achivement we have</h3>
                  <p>
                  Armed with extensive experience in software development and web design, we eagerly embrace all challenges that come our way in pursuit of advanced and ambitious solutions.
                  </p>
                  <div class="e-pattern">
                    <img src={pattern} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Count />
      <div class="callto-action">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-7">
              <div class="callto-action-text">
                <h5>
                Like what you see,  <span>Lets discuss your requirements properly”</span>{" "}
                </h5>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <div class="callto-action-btn">
                <CalendlyWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithLayout(lifeVertipride);
