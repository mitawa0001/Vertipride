import React from 'react'
import Gally from "../component/portfolio_filter";
import Counting from "../component/counting";
import { Helmet } from 'react-helmet';

function gallery() {
  const dynamicTitle = 'gallery page';
  const dynamicDescription = 'this is gallery page';
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
    <Gally/>

    <Counting/>
    <div className='mb-5'></div>
   </>
  )
}

export default gallery