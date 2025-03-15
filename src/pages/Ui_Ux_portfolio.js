import React from 'react'
import Newport from "../portfolio_new/port_new"

import { Helmet } from 'react-helmet';
import WithLayout from '../component/Layout';

function Ui_Ux_Portfolio() {
    const dynamicTitle = 'Portfolio';
    const dynamicDescription = 'this is portfolio page';
    return (
        <>
            <Helmet>
                <title>{dynamicTitle}</title>
                <meta name="description" content={dynamicDescription} />
            </Helmet>
            <div class="about-hero-banner">
                <div class="about-hero-text">
                    <h1>UI / UX Portfolio</h1>
                </div>
            </div>
            <Newport />
        </>
    )
}

export default WithLayout(Ui_Ux_Portfolio)