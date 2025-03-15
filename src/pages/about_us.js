import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import CalendlyWidget from "../component/calendlyWidget";
import pattern from "../image/expertise/e-pattern.png";
import Count from "../component/counting"
import half_logoo from "../image/half-circle-22.png"
import shadow_logoo from "../image/Layer_456.png"
import shadow_logoo1 from "../image/Layer 2 copy 2.png"

import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import Preloader from '../component/Preloader';

import value_banner_img from "../image/carechter-11.png"
import WithLayout from '../component/Layout';
function AboutUs() {
	const dynamicTitle = 'About Vertipride';
	const dynamicDescription = 'About Vertipride';
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
					<h1>Know more about Us</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a viverra leo. </p>
				</div>
			</div>
			{/* <!-- =========About Conetnt Area=========== --> */}
			<section>
				<div class="main-counter-area">
					<div class="container">
						<div class="row">
							{/* <!-- section heading text--> */}
							<div class="col-xl-12 d-flex align-items-center">
								<div class="section-heading-1 home-counter-text text-center">
									<h3>About Vertipride</h3>
									<p>
										At Vertipride Solutions, we're passionate about helping businesses achieve their goals with the power of technology. With expertise in web development, web design, app development, custom software, ERP, MIS, and management systems, we deliver results that drive success.
										Our team of experts works collaboratively with clients to create user-friendly solutions that deliver tangible results. We're dedicated to building long-term relationships and delivering exceptional customer service.
										Contact us today to learn how we can help you harness the power of technology and achieve your business goals.
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

			<section id="about " className="bg-circle">
				<div className="bg-img-11"><img src={shadow_logoo} alt="shadow"></img></div>
				<div className="bg-img-222"><img src={shadow_logoo1} alt="shadow"></img></div>
				<div className="bg-img-33"><img src={half_logoo} alt="shadow"></img></div>





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

										<h2>Our Vision</h2>
									</div>
									<p>To empower businesses with cutting-edge technology solutions that streamline their operations, increase efficiency, and drive growth." - This vision emphasizes the importance of delivering cutting-edge technology solutions that help businesses streamline their operations, increase efficiency, and drive growth. It highlights the need for solutions that can help businesses stay agile and responsive to changing market conditions.
									</p>
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
											<h2>Our Values</h2>
										</div>
										<p>At our core, we uphold the principles of fairness, respect, and honesty. Whether you're a recent addition to our team, one of our esteemed founders, or a valued client, we recognize these fundamental elements as vital for accomplishing excellence and finding fulfillment throughout our journey together.</p>
									</div>
								</div>
								<div class="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
									<div class="">
										<img src={value_banner_img} alt="banner right" style={{ height: "100%", width: "100%" }} ></img>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-12 d-flex align-items-center">
					<div class="container  section-heading-1 home-counter-text text-center">
						{/* <h4>Summary</h4> */}
						<h3>Achivement we have</h3>
						<p>
						Armed with extensive experience in software development and web design, we eagerly embrace all challenges that come our way in pursuit of advanced and ambitious solutions.
						</p>
						<div class="e-pattern">
							<img src={pattern} alt=""></img>
						</div>
					</div>
				</div>
				<Count />
			</section>

			{/* <Counting /> */}
			<div class="callto-action">
				<div class="container">
					<div class="row">
						<div class="col-xl-8 col-lg-8 col-md-8 col-sm-7">
							<div class="callto-action-text">
								<h5>Like what you see,  <span>Lets discuss your requirements properly”</span>{" "}</h5>
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
	)
}

export default WithLayout(AboutUs);
