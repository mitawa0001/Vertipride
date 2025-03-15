import React from "react";
import service_p from "../image/service/service-p-1.png";
import pattern from "../image/expertise/e-pattern.png";
import PC11 from "../image/pc.png"
import android from "../image/androide_teq.png";
import Contact from "../component/calendlyWidget";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import Preloader from '../component/Preloader';

function Web_dev() {
  const dynamicTitle = 'Web Development';
  const dynamicDescription = 'this is UI UX page';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation, e.g., fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace this with your actual data fetching logic
  }, []);


  if (isLoading) {
    return <Preloader isLoading={isLoading} />
  }
  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
      </Helmet>
      <div class="about-hero-banner">
        <div class="about-hero-text">
          <h1>Web Development</h1>
        </div>
      </div>
      <section>
        <div class="home-about-area">
          <div class="container">
            <div class="row">
              {/* <!--about text--> */}
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="section-heading-1 home-about-text">
                  <h4>We Are offering</h4>
                  <h3>Know interesting things</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam placerat rutrum turpis, sit amet hendrerit metus
                    vulputate id. Nulla laoreet maximus feugiat consectetur.{" "}
                  </p>

                  <div class="e-pattern">
                    <img src={pattern} alt="patern"></img>
                  </div>
                </div>
              </div>
              {/* <!--about image--> */}
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="home-about-image d-flex flex-wrap">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                    <div
                      class="single-service"
                      data-aos="fadein"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <div class="service-icon">
                        <img src={android} alt="alpha"></img>
                      </div>
                      <div class="service-text">
                        <h3>ERP Soluctions</h3>
                      </div>
                      <div class="servive-p-1">
                        <img src={pattern} alt="alpha"></img>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                    <div
                      class="single-service"
                      data-aos="fadein"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <div class="service-icon">
                        <img src={android} alt="alpha"></img>
                      </div>
                      <div class="service-text">
                        <h3>ERP Soluctions</h3>
                      </div>
                      <div class="servive-p-1">
                        <img src={service_p} alt="alpha"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex col-xl-6 col-lg-6 col-md-6 mt-5">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                  <div
                    class="single-service"
                    data-aos="fadein"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div class="service-icon">
                      <img src={android} alt=""></img>
                    </div>
                    <div class="service-text">
                      <h3>ERP Soluctions</h3>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                  <div
                    class="single-service"
                    data-aos="fadein"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div class="service-icon">
                      <img src={android} alt=""></img>
                    </div>
                    <div class="service-text">
                      <h3>ERP Soluctions</h3>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex col-xl-6 col-lg-6 col-md-6 mt-5">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                  <div
                    class="single-service"
                    data-aos="fadein"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div class="service-icon">
                      <img src={android} alt=""></img>
                    </div>
                    <div class="service-text">
                      <h3>ERP Soluctions</h3>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                  <div
                    class="single-service"
                    data-aos="fadein"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div class="service-icon">
                      <img src={android} alt=""></img>
                    </div>
                    <div class="service-text">
                      <h3>ERP Soluctions</h3>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container"></div>
      <div class="col-xl-12 col-lg-6 col-md-6 special">
        <div class="section-heading-1 home-about-text text-center ">
          <h3>Benefits Of Android Application Development</h3>
          <p>
            As We All Know Android Is An Open Source Platform, More Than 70% Of
            The People Around The World Prefer Android.{" "}
          </p>

          <div class="e-pattern">
            <img src={pattern} alt=""></img>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="d-flex col-xl-12 col-lg-6 col-md-6">
          <div class="col-xl-4 col-lg-6 col-md-6 mt-5">
            <div class="d-flex flex-wrap justify-content-center">
              <img src={PC11} alt="pcimg" style={{ width: "92px", height: "92px" }}></img>
              <p class="mt-5 text-center">
                As We All Know Android Is An Open Source Platform, More Than 70% Of
                The People Around The World Prefer Android.{" "}
              </p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 mt-5">
            <div class="d-flex flex-wrap justify-content-center">
              <img src={PC11} alt="pcimg" style={{ width: "92px", height: "92px" }}></img>
              <p class="mt-5 text-center">
                As We All Know Android Is An Open Source Platform, More Than 70% Of
                The People Around The World Prefer Android.{" "}
              </p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 mt-5">
            <div class="d-flex flex-wrap justify-content-center ">
              <img src={PC11} alt="pcimg" style={{ width: "92px", height: "92px" }}></img>
              <p class="mt-5 text-center">
                As We All Know Android Is An Open Source Platform, More Than 70% Of
                The People Around The World Prefer Android.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>


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
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Web_dev