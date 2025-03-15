import { Helmet } from 'react-helmet';
import React from 'react'
// import Portfolio_filter from '../component/portfolio_filter';
import PortfolioImg from "../component/Android_Web_Development"

function web_android() {
    const dynamicTitle = 'Team Member';
    const dynamicDescription = 'Vertipride team member list';
    return (
        <>
            <Helmet>
                <title>{dynamicTitle}</title>
                <meta name="description" content={dynamicDescription} />
            </Helmet>
            <div class="about-hero-banner">
                <div class="about-hero-text">
                    <h1>Android and Web development Portfolio</h1>
                </div>
            </div>
            {/* <Portfolio_filter/> */}
            <PortfolioImg/>

            
           


        </>
    )
}

export default web_android