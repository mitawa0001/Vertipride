import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// import constraction from "../image/construction.svg"
function working() {
    const dynamicTitle = 'Page in Progress';
    const dynamicDescription = 'this is incomplete page';
    return (
        <>
            <Helmet>
                <title>{dynamicTitle}</title>
                <meta name="description" content={dynamicDescription} />
            </Helmet>
            <div class="error-page-area">
                <div class="container">
                    <div class="row">
                        {/* <!--404 text image--> */}
                        <div class="col-xl-12">
                            <div class="error-text">
                                {/* <img src="img/404.png" alt=""> */}
                                <h2>Coming Soon</h2>
                                <Link class="current" to="/">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default working