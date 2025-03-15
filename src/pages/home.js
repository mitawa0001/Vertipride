import React from "react";
import header_pattern from "../image/header-pattern-1.png";
import technology from "../image/Vector Smart Object.png";
import pattern from "../image/expertise/e-pattern.png";
import { Player } from "@lottiefiles/react-lottie-player";
import Clientlogo from "../component/partners_slider.js";
import Service222 from "../image/service222.png";
import Slider from "../component/slider";
import shadow_logoo from "../image/Layer_456.png";
import shadow_logoo1 from "../image/Layer 2 copy 2.png";
import half_logoo from "../image/half-circle-22.png";
import shadow_logoo3 from "../image/Layer 2 copy 3.png";
import Count from "../component/counting";
import Vector1 from "../image/Vector Smart 1.png";
import Vector2 from "../image/Vector Smart 2.png";
import Vector3 from "../image/Vector Smart 3.png";
import Vector4 from "../image/Vector Smart 4.png";
import Vector5 from "../image/Vector Smart 5.png";

import Tabs from "../component/Tabs";
import Logo_icon from "../image/new_blue_logo.png";
import { Helmet } from 'react-helmet';
import WithLayout from "../component/Layout";





function Home() {


  const dynamicTitle = 'Home - Vertipride Solutions';
  const dynamicDescription = 'this is home page';
  // const [startCounter, setStartCounter] = useState(false)

  // useEffect(() => {
  //   console.log("scrolling")

  //   document.addEventListener('scroll', (e) => {
  //     console.log("scrolling")
  //     const couterEle = document.getElementById('counters');
  //     const currentlyShown = elementIsVisibleInViewport(couterEle, true);
  //     if(currentlyShown){
  //       setStartCounter(currentlyShown)
  //     }
  //     console.log({currentlyShown})
  //   })
  // }, [])

  // const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  //   const { top, left, bottom, right } = el.getBoundingClientRect();
  //  debugger
  //   const { innerHeight, innerWidth } = window;
  //   return partiallyVisible
  //     ? ((top > 0 && top < innerHeight) ||
  //         (bottom > 0 && bottom < innerHeight)) &&
  //         ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
  //     : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  // };

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
      </Helmet>

      <div>
        <div className="backgroung-img-2">
          <div class="header-content-area">
            <div class="container">
              <div class="header-pattern-1">
                <img src={header_pattern} alt=""></img>
              </div>
              <div class="header-pattern-2">
                <img src={Logo_icon} alt="" style={{ height: "300px", width: "300px" }}></img>
              </div>
              <div class="header-animation-area">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-8">
                    <div class="intro-text">
                      <h1
                        data-aos="slide-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="700"
                        data-aos-duration="1200"
                      >
                        Things Happens
                        <br></br>After A Click.....
                      </h1>
                      <p
                        data-aos="fade-in"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="1500"
                        data-aos-duration="1200"
                      >
                        Vertipride Solutions Guarantees<br></br>
                        We trust our expertise and Guarantee you the<br></br>
                        best possible service
                      </p>
                    </div>
                  </div>
                  <div class="header-1-artwork">
                    <div class="layer">
                      <img src={technology} alt="" ></img>

                      <div class="layer-3">
                        <img src="img/spin.png" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section id="about bg-circle">
          <div className="bg-img"><img src={half_logoo} alt="shadow"></img></div>
          <div class="abou-us-area">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                  <div class="youtube-video-wrapper">

                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">

                  {/* <!-- about brief--> */}
                  <div class="about-content text-right">
                    <div class="about-section-title">
                      {/* <h4>About Us</h4> */}
                      <h2>About Us</h2>
                    </div>
                    <p> At Vertipride Solutions, we're passionate about helping businesses achieve their goals with the power of technology. With expertise in web development, web design, app development, custom software, ERP, MIS, and management systems, we deliver results that drive success.
                      Our team of experts works collaboratively with clients to create user-friendly solutions that deliver tangible results. We're dedicated to building long-term relationships and delivering exceptional customer service.
                      Contact us today to learn how we can help you harness the power of technology and achieve your business goals.
                    </p>
                  </div>
                </div>
                {/* <!-- about video--> */}

              </div>
              {/* <!-- about team photo--> */}

            </div>
          </div>
        </section>





        {/* <section>
        <div class="home-about-area">
          <div class="container">
            <div class="row">
           
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
                    <img src={pattern} alt=""></img>
                  </div>
                </div>
              </div>
           
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
                        <img src={alpha1} alt=""></img>
                      </div>
                      <div class="service-text">
                        <h3>ERP Soluctions</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam placerat rutrum turpis.
                        </p>
                      </div>
                      <div class="servive-p-1">
                        <img src={pattern} alt=""></img>
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
                        <img src={alpha1} alt=""></img>
                      </div>
                      <div class="service-text">
                        <h3>hospital management</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam placerat rutrum turpis.
                        </p>
                      </div>
                      <div class="servive-p-1">
                        <img src={service_p} alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="home-about-image d-flex flex-wrap">
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
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
                      <h3>ERP Soluctions</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam placerat rutrum turpis.
                      </p>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
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
                      <h3>hospital management</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam placerat rutrum turpis.
                      </p>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
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
                      <h3>hospital management</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam placerat rutrum turpis.
                      </p>
                    </div>
                    <div class="servive-p-1">
                      <img src={service_p} alt=""></img>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center">
                  <div class="section-button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



        <section id="about " className="bg-circle">
          <div className="bg-img-11"><img src={shadow_logoo} alt="shadow"></img></div>
          <div className="bg-img-22"><img src={shadow_logoo1} alt="shadow"></img></div>
          <div className="bg-img-33"><img src={half_logoo} alt="shadow"></img></div>

          <div class="col-xl-12 d-flex align-items-center">
            <div class="container  section-heading-1 home-counter-text text-center about-section-title ">
              <h4>Our Reach</h4>
              <h2>Prepare to be inspired by the incredible people around you.</h2>
              <p>
                At Vertipride Solutions, our commitment lies in delivering tailored solutions that precisely align with your specific requirements. Our focus is on generating favorable outcomes and sustainable advantages for our clients. We are enthusiastic about extending our expertise to you, as we are eager to create remarkable results that will benefit you in the long run.

              </p>
              <div class="e-pattern">
                <img src={pattern} alt=""></img>
              </div>
            </div>
          </div>
          {/* <Count startCounter={startCounter} /> */}
          <Count />
          <div class="abou-us-area ">
            <div className="bg-img-44"><img src={half_logoo} alt="sdf"></img></div>
            <div className="bg-img-55"><img src={half_logoo} alt="sdf"></img></div>
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                  <Player
                    src="https://assets4.lottiefiles.com/packages/lf20_ZgrQzM1wdT.json"
                    className="player"
                    loop
                    autoplay
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
                  {/* <!-- about brief--> */}
                  <div class="about-content text-right">
                    <div class="about-section-title">
                      <h4>Products</h4>
                      <h2>Marketing & Design</h2>
                    </div>
                    <p>At Vertipride Solutions, we're driven by the significance of marketing conversion rates. Our heartfelt mission is to empower remarkable companies to flourish and thrive, enabling them to grow better and more effectively. By immersing ourselves in the metrics that truly count, our transformative demand generation and ABM campaigns expertly convert ideal buyers while effectively conveying a crystal-clear value proposition.</p>

                  </div>
                </div>


              </div>

            </div>
            <div class="abou-us-area">
              <div class="container">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center ">
                    {/* <!-- about brief--> */}
                    <div class="about-content text-left">
                      <div class="about-section-title">
                        <h4>Technology</h4>
                        <h2>Services We Provide</h2>
                      </div>
                      <p>In the realm of project execution, every endeavor brings its own set of challenges, demanding a team armed with distinctive skillsets. Our relentless pursuit has been to offer software development services that embody flexibility, affordability, and exceptional efficiency. With unwavering commitment, we aim to surpass expectations, delivering tailored solutions that cater to your precise requirements.</p>

                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                    <div class="">
                      <img src={Service222} alt="banner right" style={{ height: "100%", width: "100%" }} ></img>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="main-counter-area">
            <div class="container">
              <div class="row">
                {/* <!-- section heading text--> */}
                <div class="col-xl-12 d-flex align-items-center justify-content-center">
                  <div class="section-heading-1 home-counter-text text-center about-section-title">
                    <h3>Thematic Sectors</h3>
                    <p>
                      Our solutions can be implemented keeping in mind a range of thematic sectors as mentioned below
                    </p>
                    <div className="row d-flex justify-content-center flex-wrap my-4">
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <img src={Vector1} style={{ height: "100%", width: "100%" }} alt="smart cector img"></img>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <img src={Vector2} style={{ height: "100%", width: "100%" }} alt="smart cector img"></img>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <img src={Vector3} style={{ height: "100%", width: "100%" }} alt="smart cector img"></img>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center flex-wrap my-5">
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <img src={Vector5} style={{ height: "100%", width: "100%" }} alt="smart cector img "></img>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <img src={Vector2} style={{ height: "100%", width: "100%" }} alt="smart cector img"></img>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <img src={Vector4} style={{ height: "100%", width: "100%" }} alt="smart cector img"></img>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <img src={Vector3} style={{ height: "100%", width: "100%" }} alt="smart cector img"></img>
                      </div>
                    </div>

                    <div class="e-pattern">
                      <img src={pattern} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        <div class="our-project home-counter-text text-center about-section-title">
          <h3>Our Projects are build on the following Tech Stacks</h3>
        </div>
        <Tabs />

        <Slider />



        {/* <!-- mission and vission --> */}
        {/* <section class="mission">
        <div class="main-counter-area">
          <div class="container">
            <div class="row">
             
              <div class="col-xl-12 d-flex align-items-center">
                <div class="section-heading-1 home-counter-text text-center">
                  <h4>Why Vertipride</h4>
                  <h3>Let us change the way you think about technology</h3>
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

                    
                  </div>
                </div>
              </div>
              <div class="d-flex flex-wrap col-lg-12 col-sm-12 mt-5 pb-5">
                <div class="col-lg-6 col-sm-12">
                  <h4>We Are Offering</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Impedit eos iste accusamus ipsum temporibus officia
                    assumenda, in tempora expedita aperiam magnam voluptatum
                    culpa
                  </p>
                  <div class="bg-darkkk d-flex flex-wrap mt-4 col-sm-12">
                    <div class="col-lg-2 d-flex align-items-center justify-items-center ">
                      <Player
                        src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
                        className="player"
                        loop
                        autoplay
                        style={{ height: "100px", width: "100px" }}
                      />
                    </div>
                    <div class="col-lg-10 mission-box">
                      <h4>Vision</h4>
                      <p class="mission-box-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa praesentium explicabo sed assumenda dolorum
                        repudiandae{" "}
                      </p>
                    </div>
                  </div>
                  <div class="bg-darkkk flex-wrap d-flex mt-4 pe-3">
                    <div class="col-lg-2 justify-content-center d-flex justify-items-center align-items-center ">
                      <Player
                        src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
                        className="player"
                        loop
                        autoplay
                        style={{ height: "100px", width: "100px" }}
                      />
                    </div>
                    <div class="col-lg-10 mission-box ps-3">
                      <h4>Mission</h4>
                      <p class="mission-box-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa praesentium explicabo sed assumenda dolorum
                        repudiandae{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center ">
                  <img
                    class="mission-vission-side-img"
                    src={mission_vission}
                    width="100%"
                    height="100%"
                    alt="side img mission vission"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


        {/* <!-- =========Service Area=========== --> */}
        {/* <section>
        <div class="services-area">
          <svg
            id="curve"
            data-name="layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 1416.99 174.01"
          >
            <path
              class="cls-1"
              d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
              transform="translate(0 -135.53)"
            />
          </svg>
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-5 d-flex align-items-center">
                
                <div class="section-heading-2 section-heading-2-p">
                  <h4>our services</h4>
                  <h3>Services We provides</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam placerat rutrum turpis, sit amet hendrerit metus
                    vulputate id. Nulla laoreet maximus feugiat. Nullam rhoncus,
                    orci vitae convallis venenatis Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nullam placerat rutrum turpis,
                    sit amet hendrerit metus.
                  </p>
                  <div class="section-button">
                    <a href="#">get service</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-7">
                <div class="row">
                 
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
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
                        <h3>Theme Development</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam placerat rutrum turpis.
                        </p>
                      </div>
                      <div class="servive-p-1">
                        <img src={service_p} alt=""></img>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 margin-top-sb-30">
                    <div class="row">
                      
                      <div class="col-xl-12">
                        <div class="single-service">
                          <div class="service-icon">
                            <img src={service_p} alt=""></img>
                          </div>
                          <div class="service-text">
                            <h3>Digital Marketing</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam placerat rutrum turpis.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="col-xl-12">
                        <div
                          class="single-service service-mt-30"
                          data-aos="fadein"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-delay="300"
                          data-aos-duration="1000"
                        >
                          <div class="service-icon">
                            <img src={service_p} alt=""></img>
                          </div>
                          <div class="service-text">
                            <h3>UI/UX Design</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam placerat rutrum turpis.
                            </p>
                          </div>
                          <div class="servive-p-2">
                            <img src={service_p} alt=""></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        {/* <section class="section-bg">
        <div class="expertise-area">
          <div class="container">
            <div class="row">
             
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="expertise-image">
                  <Player
                    src="https://assets4.lottiefiles.com/packages/lf20_ZgrQzM1wdT.json"
                    className="player"
                    loop
                    autoplay
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              
              <div class="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
                <div class="section-heading-1 home-expertise-text">
                  <h4>Experties</h4>
                  <h3>Marketing & Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam placerat rutrum turpis, sit amet hendrerit metus
                    vulputate id. Nulla laoreet maximus feugiat. Nullam rhoncus,
                    orci vitae convallis hendrerit feugiat venenatis. Nulla
                    laoreet maximus feugiat.
                  </p>
                  <div class="section-button">
                    <a href="#">get quote</a>
                  </div>
                  <div class="e-pattern">
                    <img src={pattern} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


        <section id="about" className="bg-circle">
          <div className="bg-img-11"><img src={shadow_logoo3} alt="shadow"></img></div>
          <div className="bg-img-33"><img src={half_logoo} alt="shadow"></img></div>

          <div className="my-5">
            <Clientlogo />
          </div>

          <div class="abou-us-area">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                  <div class="youtube-video-wrapper33">

                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
                  {/* <!-- about brief--> */}
                  <div class="about-content text-right">
                    <div class="about-section-title">
                      {/* <h4>Our Reach</h4> */}
                      <h2>Our Reach</h2>
                    </div>
                    <p>Vertipride Solutions is a global IT company providing innovative technology solutions to businesses worldwide. With expertise in various industries and cutting-edge technologies, we deliver transformative digital experiences, ensuring customer satisfaction. Partner with us to unlock new opportunities and achieve remarkable success in the digital era.</p>

                  </div>
                </div>
                {/* <!-- about video--> */}

              </div>
              {/* <!-- about team photo--> */}

            </div>
          </div>
        </section>

      </div >
    </>
  );
}

export default WithLayout(Home);
