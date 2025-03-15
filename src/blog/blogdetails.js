import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../menu/blogdetails";
import Leave_comment1 from "../menu/leave_comment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import Leave_comment from "../component/Leave comment";


function Blogdetails() {


    const { blogId } = useParams()
    const thisProduct = productsData.find(prod => prod.id === blogId)
    const thisLeave = Leave_comment1.find(prod => prod.id === blogId)

    return (
        <>
            <div class="about-hero-banner">
                <div class="about-hero-text">
                    <h1>Join us for Healthy Envirnment</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
                        viverra leo.
                    </p>
                </div>
            </div>
            <div class="blog-body">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            {/* <!--=============Left Side Bar==============--> */}
                            <div class="left-side">
                                <div class="blog-post-heading">
                                    <h1>{thisProduct.single_blog_heading}</h1>
                                    <span class="publishe-date">published : {thisProduct.date}</span>
                                </div>
                                {/* <!--single blog content--> */}
                                <div class="blog-body-content">
                                    <p>{thisProduct.longdesc_1}</p>
                                    {/* <!--single blog middle image--> */}
                                    <div class="blog-inner">
                                        {/* {thisProduct.image} */}
                                        <img src={thisProduct.single_page_banner} style={{ height: "100%", width: "100%" }} alt=""></img>
                                    </div>
                                    <p>{thisProduct.longdesc_2}</p>
                                    {/* <!--single blog social share--> */}
                                    <div class="blog-share">
                                        <h4>Share It on</h4>
                                        <ul>
                                            <li>
                                                <Link class="footer-socials" to="/">
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="footer-socials" to="/">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="footer-socials" to="/">
                                                    <FontAwesomeIcon icon={faTwitch} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="footer-socials" to="/">
                                                    <FontAwesomeIcon icon={faYoutube} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single blog comments area--> */}
                    
                    {/* <!--single blog form--> */}
                    {/* <div class="row">
                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <div class="comment-heading">
                                <h4>leave comment</h4>
                            </div>
                            <div class="comment-field">
                                <Leave_comment />
                            </div>
                        </div>
                    </div> */}

                    <div class="row my-5">
                        {/* <!-- single blog--> */}
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div class="home-single-blog">
                                <div class="s-blog-image">
                                    <img src={thisProduct.single_page_banner} alt=""></img>
                                    <div class="blog-post-date">
                                        <span>08 jun</span>
                                    </div>
                                </div>
                                <div class="s-blog-content">
                                    <h4>Marketing Experties</h4>
                                    <p>Lorem ipsum dolor sit amet adipisicing elit. Sunt enim, quas et libero excepturi!</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single blog--> */}
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-top-sb-30">
                            <div class="home-single-blog">
                                <div class="s-blog-image">
                                    <img src={thisProduct.single_page_banner} alt=""></img>
                                    <div class="blog-post-date">
                                        <span>09 aug</span>
                                    </div>
                                </div>
                                <div class="s-blog-content">
                                    <h4>design Experties</h4>
                                    <p>Lorem ipsum dolor sit amet adipisicing elit. Sunt enim, quas et libero excepturi!</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* 
                    <!-- single blog--> */}
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-top-sb-30 margin-top-lb-30">
                            <div class="home-single-blog">
                                <div class="s-blog-image">
                                    <img src={thisProduct.single_page_banner} alt=""></img>
                                    <div class="blog-post-date">
                                        <span>12 jul</span>
                                    </div>
                                </div>
                                <div class="s-blog-content">
                                    <h4>SEO Experties</h4>
                                    <p>Lorem ipsum dolor sit amet adipisicing elit. Sunt enim, quas et libero excepturi!</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Blogdetails