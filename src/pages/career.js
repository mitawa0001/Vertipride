import React, { useEffect, useState } from "react";
import pattern from "../image/expertise/e-pattern.png";
import alpha1 from "../image/1.png";
import service_p from "../image/service/service-p-1.png";
import CalendlyWidget from "../component/calendlyWidget";
import Products from "../component/Products"
import { Helmet } from 'react-helmet';
import Preloader from "../component/Preloader";
import WithLayout from "../component/Layout";
// import { useEffect } from "react";


function Career() {
  const dynamicTitle = 'Join Now';
  const dynamicDescription = 'this is hirring page';
  // const a = true;

  // if (a){
  //   return<Preloader/>
  // }

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
          <h1>Join us for Healthy Envirnment</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
            viverra leo.{""}
          </p>
        </div>
      </div>


      <section class="mission">
        <div class="main-counter-area">
          <div class="container">
            <div class="row">
              {/* <!-- section heading text--> */}
              <div class="col-xl-12 d-flex align-items-center">
                <div class="section-heading-1 home-counter-text text-left">
                  <h3>Come Work With Us</h3>
                  <h4>
                    Objectively whiteboard transparent models for prospective
                    information. Authoritatively myocardinate.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Impedit eos iste accusamus ipsum temporibus officia
                    assumenda, in tempora expedita aperiam magnam voluptatum
                    culpa hic dolore molestiae eius magni! Accusantium optio
                    impedit neque assumenda autem exercitationem aliquam
                    cupiditate, quaerat iusto vero, necessitatibus sapiente
                    accusamus blanditiis voluptas aperiam deleniti alias.
                  </p>

                  <div class="e-pattern">
                    <img src={pattern} alt=""></img>

                    {/* <iframe src="https://embed.lottiefiles.com/animation/76220"></iframe> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mission">
        <div class="">
          <div class="container">
            <div class="row">
              {/* <!-- section heading text--> */}
              <div class="col-xl-12 d-flex align-items-center justify-content-between">
                <div class="section-heading-1 d-flex home-counter-text text-center justify-content-center">
                </div>
              </div>
              <div class="hiring">
                {/* <Hiring /> */}
                <Products />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Single_hiring /> */}

      {/* <Fetch /> */}


      <section>

        <div class="home-about-area">
          <h3 className="text-center pb-5">Perks and Benefits </h3>
          <div class="container">
            <div class="row">
              <div class="home-about-image d-flex flex-wrap">
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                  <div
                    class="single-service"
                    data-aos="fadein"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div class="service-icon">
                      <img src={alpha1} alt=""></img>
                    </div>
                    <div class="service-text">
                      <h3>Work Remotely </h3>
                      <p>
                        Unlock your potential and embrace the freedom of remote work. Join our team and experience a seamless blend of productivity and flexibility from anywhere in the world.
                      </p>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                  <div
                    class="single-service"
                    data-aos="fadein"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div class="service-icon">
                      <img src={alpha1} alt=""></img>
                    </div>
                    <div class="service-text">
                      <h3>Chance to prove you </h3>
                      <p>
                      Seize the opportunity and unleash your true potential. This is your chance to prove yourself and leave an indelible mark in your career. 
                      </p>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                  <div
                    class="single-service"
                    data-aos="fadein"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div class="service-icon">
                      <img src={alpha1} alt=""></img>
                    </div>
                    <div class="service-text">
                      <h3>Excellent ROI </h3>
                      <p>
                      Experience the power of exceptional returns on your investment. Our proven track record ensures that your efforts yield unmatched results and significant growth
                      </p>
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

export default WithLayout(Career);
