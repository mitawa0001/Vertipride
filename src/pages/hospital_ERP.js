import React from 'react'
import { Container } from 'react-bootstrap'
import BsPerson from "../image/Layer 18.png";
import laptop from "../image/laptop.png";
import alpha01 from "../image/hospital_erp/101941.png"
import alpha1 from "../image/hospital_erp/1768956.png"
import alpha2 from "../image/hospital_erp/2694089.png"
import alpha3 from "../image/hospital_erp/2956548.png"
import alpha4 from "../image/hospital_erp/3063143.png"
import alpha5 from "../image/hospital_erp/3481172.png"
import alpha6 from "../image/hospital_erp/3974825.png"
import alpha7 from "../image/hospital_erp/4829071-200.png"
import alpha8 from "../image/hospital_erp/Layer 15 (1).png"
import alpha9 from "../image/hospital_erp/Layer 19.png"
import alpha10 from "../image/hospital_erp/Layer 22.png"
import alpha11 from "../image/hospital_erp/Layer 25.png"
import alpha12 from "../image/hospital_erp/2956548.png"
import alpha13 from "../image/hospital_erp/Layer 26.png"
import alpha14 from "../image/hospital_erp/TR500-Icon-Set4-Outlined-LtGreen_Corporate-Culture.png"


import round_circle from "../image/sound.png"
import Monitor from "../image/monitor.png"
import blue_circle from "../image/blue-circle.png"
import shadow_logoo from "../image/Layer_456.png"
import half_logoo from "../image/half-circle-22.png"
import left_shadow from "../image/left-shadow.png"
import { Helmet } from 'react-helmet';
import CalendlyWidget from "../component/calendlyWidget";
import WithLayout from '../component/Layout';
function hospital_ERP() {
    const dynamicTitle = 'ERP Soluction';
    const dynamicDescription = 'this is home page';
    return (
        <>
            <Helmet>
                <title>{dynamicTitle}</title>
                <meta name="description" content={dynamicDescription} />
            </Helmet>
            <section>
                <div className="backgroung-img-22">
                    <div class="">
                        <div class="container">
                            <div class="header-animation-area">
                                <div class="row">
                                    <div class="">
                                        <div class="intro-text-22">
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
                                            <div className='banner-button d-flex '>
                                                <button className='mr-3'><CalendlyWidget /></button>
                                                <button>Details Brochure</button>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-circle mt-5">
                <div className="bg-img-11"><img src={shadow_logoo} alt="shadow"></img></div>
                <div className="bg-img-222"><img src={left_shadow} alt="shadow"></img></div>
                <div className="bg-img-33"><img src={half_logoo} alt="shadow"></img></div>


                <Container >
                    <h2 className='w-100 text-center soluction-common-heading'>Our Offering</h2>
                    <div class="row">
                        {/* <!--single team--> */}
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={BsPerson} alt='icon'></img>

                                </span>
                                OPD (Out Patient)

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha8} alt='icon'></img>

                                </span>
                                IPD (In Patient)

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha4} alt='icon'></img>

                                </span>
                                Pharmacy 

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha6} alt='icon'></img>

                                </span>
                                Pathology

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha9} alt='icon'></img>

                                </span>
                                Operation Theater

                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha01} alt='icon'></img>

                                </span>
                                Blood Bank

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha14} alt='icon'></img>

                                </span>
                                TPA Management

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha2} alt='icon'></img>

                                </span>
                                Finance

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha5} alt='icon'></img>

                                </span>
                                Ambulance

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha7} alt='icon'></img>

                                </span>
                                Human Resource

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha10} alt='icon'></img>

                                </span>
                                Download Centre

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha3} alt='icon'></img>

                                </span>
                                Inventory

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha12} alt='icon'></img>

                                </span>
                                Front CMS

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha11} alt='icon'></img>

                                </span>
                                Reports

                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                            <div class="single-section">
                                <span className='single-circle-icon'>
                                    <img src={alpha13} alt='icon'></img>

                                </span>
                                Setup

                            </div>
                        </div>




                    </div>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <div class="single-section mt-5 w-45">
                            <span className='single-circle-icon'>
                                <img src={BsPerson} alt='icon'></img>

                            </span>
                            Calender And ToDo List
                        </div>
                    </div>

                    {/* circle section staret */}

                    <div className='row justify-content-between my-5'>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5 px-0">
                            <div className='d-flex px-0'>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center px-0'>
                                    <img className='position-absolute' src={round_circle} alt='circle' style={{ width: "100%" }}></img>
                                    <div class="circle-img">
                                        Legacy Data
                                        Upload
                                    </div>
                                    <img className='circle-icon-round' src={Monitor} alt='Monitor'></img>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex flex-wrap justify-content-between px-0'>
                                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 px-0'>
                                        <div className=''>
                                            <img src={round_circle} alt='circle' style={{ height: "100%", width: "100%" }}></img>

                                            <div class="circle-img-11">
                                                Dedicated
                                                Project Manager
                                                And Data
                                                Analysis Support
                                                <img className='circle-icon-round-22' src={Monitor} alt='Monitor'></img>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 px-0'>
                                        <img src={round_circle} alt='circle' style={{ height: "100%", width: "100%" }}></img>
                                        <div class="circle-img-22">
                                            User
                                            Trainings
                                            <img className='circle-icon-round-33' src={Monitor} alt='Monitor'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class=" col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5 px-0 d-flex flex-wrap align-items-center justify-content-center">
                            <img className='position-absolute' src={blue_circle} alt='laptop' style={{ width: "250px" }}></img>
                            <div className='blue_circle-content'>
                                Post
                                Rollout
                                Support
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5 px-0">
                            <div className='d-flex px-0'>

                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex flex-wrap justify-content-between px-0'>
                                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 px-0'>
                                        <div className=''>
                                            <img src={round_circle} alt='circle' style={{ height: "100%", width: "100%" }}></img>

                                            <div class="circle-img-11">
                                                Dedicated
                                                Project Manager
                                                And Data
                                                Analysis Support
                                                <img className='circle-icon-round-22' src={Monitor} alt='Monitor'></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 px-0'>
                                        <img src={round_circle} alt='circle' style={{ height: "100%", width: "100%" }}></img>
                                        <div class="circle-img-22">
                                            User                                                 Trainings
                                            <img className='circle-icon-round-33' src={Monitor} alt='Monitor'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center px-0'>
                                    <img className='position-absolute' src={round_circle} alt='circle' style={{ width: "100%" }}></img>
                                    <div class="circle-img">
                                        Legacy Data
                                        Upload
                                    </div>
                                    <img className='circle-icon-round' src={Monitor} alt='Monitor'></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className='w-100 text-center soluction-common-heading mt-5'>Type of Offerings</h2>

                    <div className='row justify-content-between my-5'>
                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6 mt-1">
                            <h4>Saas / License Based</h4>
                            <ul className='single-list-li'>

                                <li>Subscription model</li>
                                <li>Enterprise License & Project Level License
                                    No stringent user-based limit. Increase as
                                    per  the number of users, projects,
                                    survey forms, project locations.
                                </li>
                                <li>Flexible pricing in monthly or annual
                                    packages.</li>
                                <li>Customization on the basis of mutual discussions.</li>
                            </ul>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-5">
                            <img src={laptop} alt='laptop' style={{ width: "100%" }}></img>

                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-1">
                            <h4>Client Ownership</h4>
                            <ul className='single-list-li'>
                                <lh></lh>
                                <li>Client takes the entire codebase & IP
                                    of the platform and hosts it on their
                                    own servers
                                </li>
                                <li>Customization in future is possible
                                </li>
                                <li>1-year support & maintenance.
                                    Additional AMC contract after one year
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* <div className="bg-img-44"><img src={shadow_logoo3} alt="shadow"></img></div> */}
                </Container>



            </section>
        </>
    )
}

export default WithLayout(hospital_ERP)