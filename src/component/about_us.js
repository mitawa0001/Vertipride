import React from 'react'
import pattern from "../image/expertise/e-pattern.png";
import { Player } from "@lottiefiles/react-lottie-player";
function about_us() {
  return (
   <>
    <section class="section-bg">
		<div class="">
			<div class="container">
				<div class="row">
					{/* <!--about image--> */}
					<div class="col-xl-6 col-lg-6 col-md-6 d-flex flex-items-center">
						<div class="home-about-image">
						<Player
                        src="https://assets1.lottiefiles.com/packages/lf20_ljotbiif.json"
                        className="player"
                        loop
                        autoplay
                        style={{ height: "100%", width: "100%" }}
                      />
							
						</div>
					</div>
					{/* <!--about text--> */}
					<div class="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
						<div class="section-heading-1 home-about-text">
							<h4>About US</h4>
							<h3>Know interesting things</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis,
								sit amet hendrerit metus vulputate id. Nulla laoreet maximus feugiat consectetur. </p>
							<div class="section-button">
								<a href="">Read More</a>
							</div>
							<div class="e-pattern">
								<img src= {pattern} alt=""></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
   </>
  )
}

export default about_us
