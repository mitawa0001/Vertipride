import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function slider() {
    return (
        <>
            <div className='container text-center about-section-title my-5'>
                <h4>Testimonial</h4>
                <h2>What People Say</h2>
                <Carousel fade>

                    <Carousel.Item>
                        <div className='col-sm-12 d-flex flex-wrap align-items-center justify-content-center'>
                            {/* <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 border-rad'>
                                <div><img src={Profile} alt="shadow"></img></div>
                                <h5>Symphony</h5>
                                <h4>Symphony</h4>
                            </div> */}
                            <div className='col-xl-10 col-lg-6 col-md-6 col-sm-6'>
                                <p>"Vertipride Solutions did an exceptional job designing and developing our website and Android app for Symphony. Their team was professional, responsive, and delivered a high-quality product that exceeded our expectations. We highly recommend Vertipride Solutions to anyone looking for top-quality web and app development services."
                                </p>
                                {/* <h5 className='text-left'>Symphony Business Owner/Manager</h5> */}
                                <h4 className='text-left'>Symphony</h4>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='col-sm-12 d-flex flex-wrap align-items-center justify-content-center'>
                            {/* <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 border-rad'>
                                <div><img src={Profile} alt="shadow"></img></div>
                                <h5>Krishami</h5>
                                <h4>Owner Krishami APCL</h4>
                            </div> */}
                            <div className='col-xl-10 col-lg-6 col-md-6 col-sm-6'>
                                <p>The success of our business owes much to the critical CRM and website development services provided by Vertipride Solutions. Their team exhibits high levels of responsiveness, dedication, and unwavering commitment towards delivering results. We highly value their proficiency in understanding our needs and tailoring bespoke solutions to perfectly suit our unique requirements. We strongly endorse Vertipride Solutions to any business that seeks smart, efficient, and effective CRM and website development services.</p>
                                <h5 className='text-left'>Krishami</h5>
                                <h4 className='text-left'>Owner Krishami APCL</h4>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='col-sm-12 d-flex flex-wrap align-items-center justify-content-center'>
                            {/* <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 border-rad'>
                                <div><img src={Profile} alt="shadow"></img></div>

                            </div> */}
                            <div className='col-xl-10 col-lg-6 col-md-6 col-sm-6'>
                                <p>The success of our business owes much to the critical CRM and website development services provided by Vertipride Solutions. Their team exhibits high levels of responsiveness, dedication, and unwavering commitment towards delivering results. We highly value their proficiency in understanding our needs and tailoring bespoke solutions to perfectly suit our unique requirements. We strongly endorse Vertipride Solutions to any business that seeks smart, efficient, and effective CRM and website development services.</p>
                                <h5 className='text-left'>Aditi Patil</h5>
                                <h4 className='text-left'>Prcetech</h4>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='col-sm-12 d-flex flex-wrap align-items-center justify-content-center'>
                            {/* <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 border-rad'>
                                <div><img src={Profile} alt="shadow"></img></div>
                                <h5>Aditi Patil</h5>
                                <h4>Rahul Patil</h4>
                            </div> */}
                            <div className='col-xl-10 col-lg-6 col-md-6 col-sm-6'>
                                <p>My expectations in the creation of my complex eCommerce website is surely fullfilled by Vertipride Solutions. They were able to provide innovative solutions for my specific needs and ensure a seamless user experience. Their expertise, attention to detail, and quality of work were truly impressive. I highly recommend Vertipride Solutions to any business seeking to create a successful eCommerce website." -
                                     </p>
                                <h5 className='text-left'>Rahul Patil</h5>
                                <h4 className='text-left'>eCommerce Business Owner/Manager</h4>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='col-sm-12 d-flex flex-wrap align-items-center justify-content-center'>
                            {/* <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 border-rad'>
                                <div><img src={Profile} alt="shadow"></img></div>
                                <h5>Aditi Patil</h5>

                            </div> */}
                            <div className='col-xl-10 col-lg-6 col-md-6 col-sm-6'>
                                <p>"I am thrilled with the website that Vertipride Solutions created for me! As a medical practitioner, I needed a website that would not only showcase my services, but also provide a seamless user experience for my patients. Vertipride Solutions delivered that and more.
                                    What impressed me most was their attention to detail and commitment to excellence. They went above and beyond to ensure that my website was not only functional, but also aesthetically pleasing and reflective of my brand. I have received numerous compliments from my patients on how easy it is to navigate my website and book appointments.
                                    
                                </p>
                                <h5 className='text-left'>Dr. Swati gaikwad</h5>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='col-sm-12 d-flex flex-wrap align-items-center justify-content-center'>
                            {/* <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 border-rad'>
                                <div><img src={Profile} alt="shadow"></img></div>
                                <h5>Aditi Patil</h5>
                                <h4>Shubham Umale</h4>
                            </div> */}
                            <div className='col-xl-10 col-lg-6 col-md-6 col-sm-6'>
                                <p>I recommend Vertipride Solutions for their excellent work in creating my surgical supply business website. They were very professional and always replied quickly, and they made a website that was better than what I expected.
                                    They paid attention to the details and were creative, and they listened to my ideas and suggestions for the website. They also explained everything in a way that was easy to understand and patiently answered all my questions.
                                    Overall, I had a great experience working with Vertipride Solutions and I am very happy with the final website. I recommend them to anyone who needs a professional and high-quality website for their business.
                                </p>
                                <h5 className='text-left'>Shubham Umale</h5>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default slider